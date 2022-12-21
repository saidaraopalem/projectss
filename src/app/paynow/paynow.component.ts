// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-paynow',
//   templateUrl: './paynow.component.html',
//   styleUrls: ['./paynow.component.css']
// })
// export class PaynowComponent implements OnInit {

//   constructor() { }

//   ngOnInit(): void {
//   }

// }

import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-paynow',
  templateUrl: './paynow.component.html',
  styleUrls: ['./paynow.component.css']
})
export class PaynowComponent implements OnInit {
  form: FormGroup = new FormGroup({
    fullname: new FormControl(''),
    username: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
    acceptTerms: new FormControl(false),
  });
  submitted = false;

  constructor(private cartService : CartService, private currency : CurrencyPipe, private formBuilder: FormBuilder) { }
  handler:any = null;
  ngOnInit() {
 this.amout=this.cartService.getTotalPrice();
    this.loadStripe();
    this.form = this.formBuilder.group(
      {
        fullname: ['', Validators.required],
        username: [
          '',
          [
            Validators.required,
            Validators.minLength(10),
          ],
        ],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(6),
            Validators.maxLength(40),
          ],
        ],
        confirmPassword: ['', Validators.required],
        acceptTerms: [false, Validators.requiredTrue],
      },
      {
        // validators: [Validation.match('password', 'confirmPassword')],
      }
    );
  }

  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(JSON.stringify(this.form.value, null, 2));
  }

  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }

  
 amout:any=0;

  pay(amount: any) {    
    if(confirm("Do you want to continue payment!")){
      var handler = (<any>window).StripeCheckout.configure({
        key: 'pk_test_51M5N4YSEcEtB2hwIyPy8lwxB98H4LHXcwziRUyQK2gn5crnpmnPDl2lZqpSu6enI3LL9cphz0CgttELckz6TAhml00SzhaMmqX',
        locale: 'auto',
        token: function (token: any) {
          // You can access the token ID with `token.id`.
          // Get the token ID to your server-side code for use.
          console.log(token)
          alert('Payment Done successful');
          
        }
      });
    }
    else{
      window.history.back();
    }
   
 
    handler.open({
      name: 'PayNow',
      description: 'Debit/Credit Card',
      amount: amount * 100
    });
 
  }
 
  loadStripe() {
     
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51M5N4YSEcEtB2hwIyPy8lwxB98H4LHXcwziRUyQK2gn5crnpmnPDl2lZqpSu6enI3LL9cphz0CgttELckz6TAhml00SzhaMmqX',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!')
            
            
          }
        });
      }
       
      window.document.body.appendChild(s);
    }
  }
}




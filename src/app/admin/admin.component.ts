import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,ValidationErrors, EmailValidator, FormControl
} from '@angular/forms'
import {ValidatorFn } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  
  form: FormGroup = new FormGroup({
    email: new FormControl('Admin@temples.com'),
    password: new FormControl('Admin'),
  });
  submitted:boolean=false;
  login=false;
  constructor(private formBuilder: FormBuilder,private router: Router,private location: LocationStrategy) { 
    history.pushState(null, window.location.href);
    this.location.onPopState(() => {
    history.pushState(null, window.location.href);
});
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.maxLength(15)
          ]
        ],
      },
    );
  }
  get f(): { [key: string]: AbstractControl } {
    return this.form.controls;
  }
maile='';
password='';
  onSubmit(){
    if (this.form.valid && this.maile =="Admin@citycart.com" && this.password=="Adminone") {
      // this.router.navigate(['/home']);
      this.submitted = true;
      this.login=true;
    }
    else{
          alert("Entered Email or Password incurrect...!");
    }
    console.log(JSON.stringify(this.form.value, null, 2));
  }
  onReset(): void {
    this.submitted = false;
    this.form.reset();
  }
  logout(){
    this.login=false;
    this.submitted=false;
  }
  }
  

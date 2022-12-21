import { isNgTemplate } from '@angular/compiler';
import { Component, OnInit, HostListener } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';
declare var Razorpay:any;
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public products : any = [];
  public grandTotal !: number;
  public quantity: any=1;
  public total=0;
  public fulltoal=0;
  //  payment code........................................................********8
  options = {
    "key": "rzp_test_trDVeTx3WvLSzg", // Enter the Key ID generated from the Dashboard
    "amount": "5000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    // "secretKey":"5qzeejuYBKtq0AzoNs6D1M6O",
    "name": "Acme Corp",
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": {
        "name": "Palem Saidarao",
        "email": "saidarao.palem@example.com",
        "contact": "9999999999"
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};

  paymentAlert() {
    let rzp1 = new Razorpay(this.options);
    rzp1.open();
  }
  
  
  constructor(private cartService : CartService, private api : ApiService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.products = res;
      this.products.forEach((a:any)=>{
        Object.assign(a, {quantity:1});
      });
      this.grandTotal = this.cartService.getTotalPrice();
    });
    
    localStorage.setItem('localCart',JSON.stringify(this.products)); 
  }
  
  removeItem(item:any){
    if(confirm("Do you want to delete this item...!")){
      this.cartService.removeCartItem(item);
      if(item.count>1){
      this.grandTotal-=(item.total*item.count)-item.price;
      alert(item.total*item.count-item.price)
      }
      else{
        this.grandTotal-=this.total;
      }
    }
  }
  emptycart(){
    if(confirm("Do you want to meke your cart empty...!")){
      this.cartService.removeAllCart();
    }
  }
  qnty:any;
  getLocalData:any = localStorage.getItem('localCart');
  count:any=1;
  increment(item:any){
    this.count+=1;
    item.count++;
    this.total+=item.total;
    this.qnty=item.quantity;
   
    }

  decrement(item:any){
    if(item.count >1){
      this.total-=item.total;
      item.count--;
    }
    if(item.count==0){
      this.cartService.removeCartItem(item);
    }
    // this.products.forEach((a:any)=>{
    //   Object.assign(a, {quantity:this.count});
    //   if(this.count<1){
    //   this.cartService.removeCartItem(item);
    //   this.cartService.productList.next(this.cartService.cartItemList);
    //   }
    // });
    

  }
  
  
}

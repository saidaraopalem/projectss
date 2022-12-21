import { LocationStrategy } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CheckboxControlValueAccessor } from '@angular/forms';
import { S } from 'chart.js/dist/chunks/helpers.core';
import { ApiService } from '../api.service';
import { ManageproductsService } from '../manageproducts.service';

@Component({
  selector: 'app-manageproducts',
  templateUrl: './manageproducts.component.html',
  styleUrls: ['./manageproducts.component.css']
})
export class ManageproductsComponent implements OnInit {

  constructor(private temples: ApiService, private product : ManageproductsService, private loc : LocationStrategy) {
    history.pushState(null, window.location.href);
    this.loc.onPopState(() => {
    history.pushState(null, window.location.href);
});
   }
public products:any=true;
public productslist:any;
public checkresult:boolean | undefined;
formHeader:string="Add Temple";
  templeName:string='';
  price:string='';
  quantity:number | undefined;
showForm=false;
id=null;
image=null;
stock=null;
category=null;
  ngOnInit(): void {
    this.getProduct();
  }
  getProduct(){
    // this.products = this.temples.TempleList;
    // console.log(this.products);
    this.product.getAllForAdmin().subscribe((data)=>{
      this.productslist=data;
    },
    (error)=>{
      console.log("error");
    }
    )
  }
  
  deleteProduct(id:any){
    if(confirm("do you want to delete an item")){
      this.product.deleteProducts(id).subscribe(
        (res)=>{
          this.getProduct();
        }
      )
    }
  }
deleteAll(){
  if(confirm("Do you want to clear all data!")){
    this.product.deleteAll().subscribe(
      (res)=>{
        this.getProduct();
      }
    )
  }
}
openForm(data:any=null){
  this.showForm=true;
  if(data){
    this.templeName=data.title;
    this.price=data.price;
    this.quantity=data.count;
    this.id=data.id;
    this.stock=data.stock;
    this.category=data.category;
    this.image=data.image;
    this.formHeader="Edit Product";
  }
  else{
    this.id=null;
    this.formHeader="Add Product";
  }
}
saveTemple(){
  this.showForm=false;
  let body={
    id:this.id,
    title:this.templeName,
    price:this.price,
    count:this.quantity,
    image:this.image,
    stock:this.stock,
    category:this.category
   
  }

  if(body.id ==null){
    //body['id']=this.id;
    this.product.putProduct(body).subscribe(
      (res)=>{
        this.getProduct();
      }

    )
  }
  else{
    this.product.postProduct(body).subscribe(
      (res)=>{
        this.getProduct();
      }
    )
  }
}
closeForm(){
  this.showForm=false;
  
}
// clearForm(){
//   this.templeName;;
//     this.price;;
//     this.quantity=null;
// }

checkValue(product:any){
  if(product.status=='ENABLED'){
    if(confirm("Do you want to Disabled this product...!")){
      this.product.disableProduct(product).subscribe((res)=>{
        this.getProduct;
      });
    }
  }
  else{
    if(confirm("Do you want to Enable this product...!")){
      this.product.enableProduct(product).subscribe((res)=>{
        this.getProduct;
      });
    }
  }
    

  }
}

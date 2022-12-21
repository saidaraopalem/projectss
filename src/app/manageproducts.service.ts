import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { json } from 'express';

@Injectable({
  providedIn: 'root'
})
export class ManageproductsService {
  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
  url ="https://fakestoreapi.com/products"
  localurl="http://localhost:8080"
  constructor(private http: HttpClient) { }
  // fetchProducts(){
  //   return this.http.get(this.localurl);
  // }
  getAll(){
    return this.http.get(`${this.localurl}/${"getEnabledProducts"}`);
  }
  getAllForAdmin(){
    return this.http.get(this.localurl);
  }
  deleteProducts(id:any){
   return this.http.delete(`${this.localurl}/${"items"}/${id}`);
  } 
  // postProducts(id:any){
  //   return this.http.post(this.localurl);
  // }
  deleteAll(){
    location.reload();
    return this.http.delete(`${this.localurl}/deleteall`);
  }
  postProduct(body:any){
    return this.http.post(this.localurl,body);
  }
  putProduct(body:any){
    return this.http.put(`${this.localurl}/items/${body.id}`,body)
  }
  disableProduct(body:any){
    return this.http.get(`${this.localurl}/makeDisable/${body.id}`);
  }
  enableProduct(body:any){
    return this.http.get(`${this.localurl}/makeEnable/${body.id}`);
  }
  
}


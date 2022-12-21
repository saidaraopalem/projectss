import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CartManagementService {
HttpHeaders = new HttpHeaders().set('Content-Type', 'application/json');
localUrl="http://localhost:7075";
  constructor(private http: HttpClient) { }
  getAll(){
    return this.http.get(`${this.localUrl}/${"products"}`);
  }
  addProduct(body:any){
    return this.http.post(`${this.localUrl}/${"products"}`,body);
  }
}

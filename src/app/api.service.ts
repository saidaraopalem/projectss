import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { ManageproductsService } from './manageproducts.service';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient, private product : ManageproductsService) { }
  
  getProduct(){
    // return this.http.get<any>("http://localhost:8080")
    // .pipe(map((res:any)=>{
    //   return res;
    // }));
    return this.product.getAll().pipe(map((res:any)=>{
      return res;
    }))
  }
}

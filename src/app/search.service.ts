import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }
  public searchData:string='';
  getSearchValue(){
    return this.searchData;
  }
}

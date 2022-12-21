import { Component, HostListener, Inject, inject, OnInit, VERSION, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { SearchService } from '../search.service';
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit{
  name = 'Angular ' + VERSION.major;
  public totalItems:number = 0;
  
  constructor(private cartService : CartService, public searchService : SearchService){}
  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItems = res.length;
    })
  }
  @ViewChild('print')
  print!: ElementRef;
  title = 'angProject';
  ismenu:boolean=true;
  istoggle:boolean=true;
  navbarfixed:boolean = false;
  @HostListener('window.scroll',['$event']) onscroll(){
    if(window.scrollY > 100){
      this.navbarfixed = true;
    }
    else{
      this.navbarfixed = false;
    }
  }
  togge(){
    this.istoggle = !this.istoggle;
    this.ismenu = !this.ismenu;
    const de:any = document.querySelector(".menu");
    de.style.width='245px'
  }
  public searchValue:string='';
  dataEntered(){
    this.searchService.searchData=this.searchValue;
  }
  search(event:any){
    this.searchValue=(event.target as HTMLInputElement).value;  
    this.cartService.search.next(this.searchValue);
  }
}

import { Component, HostListener, Input, OnInit, Output } from '@angular/core';
import { TimeScale } from 'chart.js';
import { ThemeService } from 'ng2-charts';
import { template } from 'underscore';
import { ApiService } from '../api.service';
import { CartManagementService } from '../cart-management.service';
import { CartService } from '../cart.service';
import { ManageproductsService } from '../manageproducts.service';
import { SearchService } from '../search.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public productList = [];
  filterOption:string='all';
  filteredItems:any=[];
  searchKey:string='';
  searchValue:string='';
  filterCategory=[];
  arry:any=['temples','somnath temple', 'north temples'];
  
  constructor(private product: ManageproductsService,private cartmanage : CartManagementService, private api : ApiService, private cartSurvice : CartService, public searchService : SearchService) { }

  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=>{
      this.productList = res;
      this.filterCategory=res;
      this.productList.forEach((a:any)=>{
        if(a.category === "electrical hardware"){
          a.category='Hardware'
        }
        Object.assign(a, {total:a.price*a.count});
      });
    });
    this.cartSurvice.search.subscribe((val:any)=>{
      this.searchValue = val;

//bellow subscription from cartMangement survice
      this.cartmanage.getAll().subscribe((res)=>{
        this.al=res;
      });
    })
  }
  ismenu:boolean = true;
  al:any=[];
  // id:any;
  // title:String='';
  // image:String='';
  // price:String='';
  // quantity:number | undefined;
  // total:any;
  toggle(){
    this.ismenu = !this.ismenu;
  }
   count:any = 1;
   count2:any = 1;
   count3:any = 1;
   count4:any = 1;
   count5:any = 1;
   count6:any = 1;
   count7:any = 1;
   count8:any = 1;
   count9:any = 1;
  fliping(item:any){
    // let body={
    // id:Number=item.id,
    // title:String=item.title,
    // price:Number=item.price,
    // total:Number=item.total,
    // image:String=item.image,
    // quantity:Number = item.count
    // };
    const boxclass:any = document.querySelector(".body");
    if(this.count==1){
      boxclass.style.transform="rotateY(180deg)";
      this.count=this.count+1;
    }
    else if(this.count==2){
      let body={
        title:item.title,
        image:item.image,
        price:item.price,
        total:item.total,
        itemSelected:"selected"
        };
      this.cartmanage.addProduct(body);
      this.cartSurvice.addtoCart(item);
      //boxclass.style.transform="rotateY(0deg)";
      this.count=this.count+1;
    }
    else if(this.count==3){
      boxclass.style.transform="rotateY(0deg)";
      this.count+=1;
    }
    else if(this.count==4){
      this.cartSurvice.addtoCart(item);
      this.count=1;
    }
 }
 fliping2(item1:any){
  const boxclass:any = document.querySelector(".body");
    if(this.count2==1){
      boxclass.style.transform="rotateY(180deg)";
      this.count2=this.count2+1;
    }
    else if(this.count2==2){
      this.cartSurvice.addtoCart(item1);
      //boxclass.style.transform="rotateY(0deg)";
      this.count2=this.count2+1;
    }
    else if(this.count2==3){
      
      boxclass.style.transform="rotateY(0deg)";
      this.count2=this.count2+1;
    }
    else if(this.count2==4){
      
      this.cartSurvice.addtoCart(item1);
      this.count2=1;
    }
 }
 fliping3(item2:any){
  const boxclass:any = document.querySelector(".flip3");
    if(this.count3==1){
      boxclass.style.transform="rotateY(180deg)";
      this.count3=this.count3+1;
    }
    else if(this.count3==2){
      this.cartSurvice.addtoCart(item2);
      //boxclass.style.transform="rotateY(0deg)";
      this.count3=this.count3+1;
    }
    else if(this.count3==3){
      boxclass.style.transform="rotateY(0deg)";
      this.count3+=1;
    }
    else if(this.count3==4){
      this.cartSurvice.addtoCart(item2);
      this.count3=1;
    }
 }
 fliping4(item3:any){
  const boxclass:any = document.querySelector(".flip4");
    if(this.count4==1){
      boxclass.style.transform="rotateY(180deg)";
      this.count4=this.count4+1;
    }
    else if(this.count4==2){
      this.cartSurvice.addtoCart(item3);
      //boxclass.style.transform="rotateY(0deg)";
      this.count4=this.count4+1;
    }
    else if(this.count4==3){
      boxclass.style.transform="rotateY(0deg)";
      this.count4+=1;
    }
    else if(this.count4==4){
      this.cartSurvice.addtoCart(item3);
      this.count4=1;
    }
 }
 fliping5(item4:any){
  const boxclass:any = document.querySelector(".flip5");
    if(this.count5==1){
      boxclass.style.transform="rotateY(180deg)";
      this.count5=this.count5+1;
    }
    else if(this.count5==2){
      this.cartSurvice.addtoCart(item4);
      //boxclass.style.transform="rotateY(0deg)";
      this.count5=this.count5+1;
    }
    else if(this.count5==3){
      boxclass.style.transform="rotateY(0deg)";
      this.count5+=1;
    }
    else if(this.count5==4){
      this.cartSurvice.addtoCart(item4);
      this.count5=1;
    }
 }
 fliping6(item5:any){
  const boxclass:any = document.querySelector(".flip6");
    if(this.count6==1){
      boxclass.style.transform="rotateY(180deg)";
      this.count6=this.count6+1;
    }
    else if(this.count6==2){
      this.cartSurvice.addtoCart(item5);
      //boxclass.style.transform="rotateY(0deg)";
      this.count6=this.count6+1;
    }
    else if(this.count6==3){
      boxclass.style.transform="rotateY(0deg)";
      this.count6+=1;
    }
    else if(this.count6==4){
      this.cartSurvice.addtoCart(item5);
      this.count6=1;
    }
 }
 fliping7(item6:any){
  const boxclass:any = document.querySelector(".flip7");
    if(this.count7==1){
      boxclass.style.transform="rotateY(180deg)";
      this.count7=this.count7+1;
    }
    else if(this.count7==2){
      this.cartSurvice.addtoCart(item6);
      //boxclass.style.transform="rotateY(0deg)";
      this.count7=this.count7+1;
    }
    else if(this.count7==3){
      boxclass.style.transform="rotateY(0deg)";
      this.count7=1;
    }
    else if(this.count7==4){
      this.cartSurvice.addtoCart(item6);
      this.count7=1;
    }
 }
 fliping8(item7:any){
  const boxclass:any = document.querySelector(".flip8");
    if(this.count8==1){
      boxclass.style.transform="rotateY(180deg)";
      this.count8=this.count8+1;
    }
    else if(this.count8==2){
      this.cartSurvice.addtoCart(item7);
      //boxclass.style.transform="rotateY(0deg)";
      this.count8=this.count8+1;
    }
    else if(this.count8==3){
      boxclass.style.transform="rotateY(0deg)";
      this.count8+=1;
    }
    else if(this.count8==4){
      this.cartSurvice.addtoCart(item7);
      this.count8=1;
    }
 }
 fliping9(item8:any){
  const boxclass:any = document.querySelector(".flip9");
    if(this.count9==1){
      boxclass.style.transform="rotateY(180deg)";
      this.count9=this.count9+1;
    }
    else if(this.count9==2){
      this.cartSurvice.addtoCart(item8);
      //boxclass.style.transform="rotateY(0deg)";
      this.count9=this.count9+1;
    }
    else if(this.count9==3){
      boxclass.style.transform="rotateY(0deg)";
      this.count9+=1;
    }
    else if(this.count9==4){
      this.cartSurvice.addtoCart(item8);
      this.count9=1;
    }
 }
 alert="not found";
 
 filter(category:string){
  this.filterCategory =this.productList.filter((a:any)=>{
    if(a.category == category || category == ''){
      return a;
    }
  })
 }
 
}
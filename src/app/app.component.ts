// import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject, inject, OnInit, VERSION, ViewChild, ElementRef } from '@angular/core';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { CartService } from './cart.service';
import jspdf from 'jspdf';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  name = 'Angular ' + VERSION.major;
  public totalItems:number = 0;
  
  constructor(private cartService : CartService){}
  ngOnInit(): void {
    // this.cartService.getProducts()
    // .subscribe(res=>{
    //   this.totalItems = res.length;
    // })
   
      // let doo:any = document.querySelector(".menu");
      // let mee:any = document.querySelector(".box");
      // let width:any=doo.style.width;
      // if(width>260){
      //   mee.style.marginleft="865px";
      // }
  }
  @ViewChild('print')
  print!: ElementRef;
  title = 'angProject';
  
  // Export page button ...................
  isShow: boolean = false;
  isShowTop: boolean=false;
  topPosToStartShowing = 5;
  @HostListener('window:scroll')
  checkScroll() {    

    // window의 scroll top

    // Both window.pageYOffset and document.documentElement.scrollTop returns the same result in all the cases. window.pageYOffset is not supported below IE 9.



    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    console.log('[scroll]', scrollPosition);

    if (scrollPosition >= this.topPosToStartShowing) {

      this.isShow = true;
      this.isShowTop=true;

    } else {

      this.isShow = false;
      this.isShowTop=false;

    }

  }
  // TODO: Cross browsing

  exportPage() {

    window.scroll({ 

      top: 0, 

      left: 0, 

      behavior: 'smooth' 

    });

  }

  // makepdf(){
  //   var pdf = new jsPDF('landscape');
  //   pdf.html(this.print.nativeElement,{
  //     callback: (pdf)=>{
  //       pdf.save("my.pdf");
  //     }
  //   });
  //   // alert("its working");
  // }
  // makepdf(){ 
  //   let doc = new jsPDF('p', "pt", "a4");
  //   doc.html(this.print.nativeElement,{
  //     callback: (doc)=>{
  //       doc.save("obrz.pdf");
  //     }
  //   });
  // }

  makepdf(){
    
    let data:any = document.querySelector(".print");
    html2canvas(document.body).then((canvas) => {
      
      // Few necessary setting options
      var imgWidth = 500;
      var imgHeight = (canvas.height * imgWidth) / canvas.width;
      var heightLeft = imgHeight;
      const contentDataURL = canvas.toDataURL('image/png');
      let pdf = new jspdf('p', 'pt', 'a4'); // A4 size page of PDF
      var pageHeight = pdf.internal.pageSize.height;
      var position = 0;
      pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight-600);
      heightLeft -= pageHeight;
      pdf.save('homePage.pdf'); // Generated PDF
    });
  }
  top() {

    window.scroll({ 

      top: 0, 

      left: 0, 

      behavior: 'smooth' 

    });
}
}

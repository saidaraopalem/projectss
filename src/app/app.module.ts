import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NextComponent } from './next/next.component';
import {VgCoreModule} from '@videogular/ngx-videogular/core';
import {VgControlsModule} from '@videogular/ngx-videogular/controls';
import {VgBufferingModule} from '@videogular/ngx-videogular/buffering';
import {VgOverlayPlayModule} from '@videogular/ngx-videogular/overlay-play';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ResizableDirective } from './resizable.directive';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgxPrintModule } from 'ngx-print';
import {NgDynamicBreadcrumbModule} from 'ng-dynamic-breadcrumb';
import { ParentComponent } from './parent/parent.component';
import { BreadcrumbComponent } from './breadcrumb/breadcrumb.component';
import { PaynowComponent } from './paynow/paynow.component';
import { DataComponent } from './data/data.component';
import { Chart } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { DataService } from './data.service';
import { CurrencyPipe } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { ManageproductsComponent } from './manageproducts/manageproducts.component';
import { ManageproductsService } from './manageproducts.service';
import { FavouriteComponent } from './favourite/favourite.component';
import { FilterPipe } from './filter.pipe';

const next:Routes = [
  {
    path: 'home', component:HomeComponent,
    data: {
      breadcrumb: null
    },
    children: []
  },
  {
    path: 'next', component:NextComponent,
    data: {
      breadcrumb: 'next'
    },
    children: []
  },
  {
    path: 'cart', component:CartComponent,
    data: {
      breadcrumb: 'cart'
    },
    children: []
  },
  {
    path: '', component: HomeComponent,
    data: {
      breadcrumb: "home"
    },
    children:[]
  },
  {
    path:'paynow', component: PaynowComponent,
    data: {
      breadcrumb:"paynow"
    },
    children:[]
  },
  {
    path:'data', component: DataComponent,
    data:{
      breadcrumb:'data'
    },
    children:[]
  },
  {
    path: 'admin', component: AdminComponent,
    data: {
      breadcrumb: 'admin'
    },
    children:[]
  },
];
@NgModule({
  declarations: [
    AppComponent,
    NextComponent,
    HomeComponent,
    ResizableDirective,
    CartComponent,
    ParentComponent,
    BreadcrumbComponent,
    PaynowComponent,
    DataComponent,
    AdminComponent,
    ManageproductsComponent,
    FavouriteComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(next, {paramsInheritanceStrategy: 'always'}),
    VgCoreModule,
    VgControlsModule,
    VgBufferingModule,
    VgOverlayPlayModule,
    HttpClientModule,
    FormsModule,
    NgxPrintModule,
    NgDynamicBreadcrumbModule,
    NgChartsModule,
    ReactiveFormsModule
  ],
  providers: [DataService,CurrencyPipe,ManageproductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

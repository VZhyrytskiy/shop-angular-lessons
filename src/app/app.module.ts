import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponentComponent } from './product/components/product-component/product-component.component';
import { ProductListComponentComponent } from './product/components/product-list-component/product-list-component.component';
import { ProductService } from './product/service/produnc-service';
import { CartComponent } from './cart/components/cart/cart.component';
import { CartService } from './cart/serivces/cart.service';
@NgModule({
  declarations: [
    AppComponent,
    ProductComponentComponent, // Названия компонентов надо поправить, чтобы два раза не повторялся суффикс
    ProductListComponentComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }

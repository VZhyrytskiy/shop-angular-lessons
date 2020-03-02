import { Component, OnInit, Input } from '@angular/core';
import { Category, ProductModel } from '../../models/product-component.data';
import { CartService } from 'src/app/cart/serivces/cart.service';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.sass']
})



export class ProductComponentComponent implements OnInit {
  Category = Category;
  @Input() model: ProductModel;
  // tslint:disable-next-line: variable-name
  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
  }

  onBuy(event: any) {
    this._cartService.addProduct(this.model);
    this.model.isAvailable = false;
  }
}

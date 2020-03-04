import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/product/models/product-component.data';
import { CartService } from '../../serivces/cart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  public model: ProductModel[];
  private subscription: Subscription;
  // tslint:disable-next-line: variable-name
  constructor(private _cartService: CartService) { }

  ngOnInit(): void {
    // а отписка?
    this.subscription = this._cartService.getProducts().subscribe(item => this.model = item);
  }
}

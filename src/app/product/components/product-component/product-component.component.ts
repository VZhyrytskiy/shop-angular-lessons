import { Component, OnInit, Input } from '@angular/core';
import { Category, ProductModel } from '../../models/product-component.data';

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.sass']
})



export class ProductComponentComponent implements OnInit {
  Category = Category;
  @Input() model: ProductModel;
  constructor() { }

  ngOnInit(): void {
  }

  onBuy(event: any) {
    console.log(event);
    console.log('Something was sold');
  }
}

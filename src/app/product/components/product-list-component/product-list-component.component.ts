import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/product/models/product-component.data';
import { ProductService } from 'src/app/product/service/produnc-service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.sass']
})
export class ProductListComponentComponent implements OnInit {
  public model: Array<ProductModel>;

  constructor(
    // TODO: setup tslint properly
    // tslint:disable-next-line: variable-name
    private _productService: ProductService
  ) { }

  ngOnInit(): void {
    this.model = this._productService.getProducts();
  }
}

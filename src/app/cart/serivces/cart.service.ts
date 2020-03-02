import { ProductModel } from 'src/app/product/models/product-component.data';
import { BehaviorSubject, Observable } from 'rxjs';



class CartService {
  public products: ProductModel[];
  public ObservableProducts: BehaviorSubject<ProductModel[]>;

  constructor(){
    this.products = [];
    this.ObservableProducts = new BehaviorSubject<ProductModel[]>(this.products);
  }
  addProduct(product: ProductModel) {
   this.products.push(product);
  }

  getProducts(): Observable<ProductModel[]> {
    return this.ObservableProducts.asObservable();
  }
}

export {CartService};

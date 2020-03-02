import { ProductModel, Category } from '../models/product-component.data';

class ProductService {
  getProducts(): ProductModel[] {
    const result: ProductModel[] = [
      {
        category: Category.Books,
        availableIn: ['City1', 'City2', 'City3', 'City4'],
        description: 'Something descripted here',
        isAvailable: true,
        name: 'Foo',
        price: 100500
      },
      {
        category: Category.Books,
        availableIn: ['Village1', 'Village2', 'Village3', 'Village4'],
        description: 'Something descripted here for another product',
        isAvailable: true,
        name: 'Bar',
        price: 228
      }
    ];
    return result;
  }
}

export {ProductService};

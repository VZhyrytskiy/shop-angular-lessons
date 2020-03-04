interface IProductModel {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  availableIn: Array<string>;
}

class ProductModel implements IProductModel {
  name: string;  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
  availableIn: string[];
}

enum Category {
  Books,
  VideoGames,
  Movies,
  BooringStuff,
}

export {IProductModel, ProductModel, Category };

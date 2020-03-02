class FistComponentModel {
  name: string;
  description: string;
  price: number;
  category: Category;
  isAvailable: boolean;
}

enum Category {
  Books,
  VideoGames,
  Movies,
  BooringStuff,
}

export {FistComponentModel, Category}

import { FoodProduct, Product } from "./products";

export interface UserFavourites {
  favourites?: FoodProduct[];
}

export interface UserFavouriteProducts {
  favourites?: Product[];
}
export interface Product {
    id: string;
    name: string;
    species: string;
    price: number;
    sale: number;
    description: string;
    brand: string;
    rating: number[];
    image: string;
}

export interface FoodProduct extends Product {
    weight: number;
}
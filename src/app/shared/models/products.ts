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
    available: number;
}

export interface FoodProduct extends Product {
    weight: number;
    lastTil: number;
}


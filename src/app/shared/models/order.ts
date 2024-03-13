import { User } from "./user";

export class Order {
    orderedItems: OrderedItem[];
    totalPrice: number;
    user: User;
    

    constructor(orderedItems: OrderedItem[], totalPrice: number, user: User){
            this.orderedItems = orderedItems;  
            this.totalPrice = totalPrice;
            this.user = user;
        }

}

export class OrderedItem{
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    subtotal: number;

    constructor(id: string, name: string, price: number, image: string, quantity: number, 
        subtotal: number ){
            this.id = id;
            this.name = name;
            this.price = price;
            this.image = image;
            this.quantity = quantity;
            this.subtotal = subtotal;
        }
}
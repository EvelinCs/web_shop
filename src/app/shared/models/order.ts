import { User } from "./user";

export class Order {
    orderId: string;
    orderedItems: OrderedItem[];
    totalPrice: number;
    user: User;
    orderDate: Date;
    //lastTil: number;
    
    constructor(id: string, orderedItems: OrderedItem[], totalPrice: number, user: User, orderDate: Date,
      ){
        this.orderId = id;
        this.orderedItems = orderedItems;  
        this.totalPrice = totalPrice;
        this.user = user;
        this.orderDate = orderDate;
        //this.lastTil = lastTil;
    }

    toFirestoreObject(): object {
        return {
          orderId: this.orderId,
          orderedItems: this.orderedItems.map(item => ({
            id: item.id,
            name: item.name,
            price: item.price,
            image: item.image,
            quantity: item.quantity,
            subtotal: item.subtotal,
          })),
          totalPrice: this.totalPrice,
          user: this.user,
          orderDate: this.orderDate
        };
      }

}

export class OrderedItem{
    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    subtotal: number;
    available: number;

    constructor(id: string, name: string, price: number, image: string, quantity: number, 
        subtotal: number, available: number ){
            this.id = id;
            this.name = name;
            this.price = price;
            this.image = image;
            this.quantity = quantity;
            this.subtotal = subtotal;
            this.available = available;
        }
}
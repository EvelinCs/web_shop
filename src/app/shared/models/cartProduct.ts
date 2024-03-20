export class CartProduct {

    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    subtotal: number;
    available: number;
    //lastTil: number;

    constructor(id: string, name: string, price: number, image: string, quantity: number, 
        subtotal: number, available: number){
            this.id = id;
            this.name = name;
            this.price = price;
            this.image = image;
            this.quantity = quantity;
            this.subtotal = subtotal;
            this.available = available;
            //this.lastTil = lastTil;
            
        }

}
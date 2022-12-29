export class CartProduct {

    id: string;
    name: string;
    price: number;
    image: string;
    quantity: number;
    subtotal: number;
    deleteButton: string;

    constructor(id: string, name: string, price: number, image: string, quantity: number, 
        subtotal: number, deleteButton: string){
            this.id = id;
            this.name = name;
            this.price = price;
            this.image = image;
            this.quantity = quantity;
            this.subtotal = subtotal;
            this.deleteButton = deleteButton;
        }

}
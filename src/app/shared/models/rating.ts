export class Rating{
    ratingId: string;
    userId: string;
    productId: string;
    productName: string;
    rating: number;

    constructor(ratingId: string, userId: string, productId: string, productName: string, rating: number){
        this.ratingId = ratingId;
        this.userId = userId;
        this.productId = productId;
        this.productName = productName;
        this.rating = rating;
    }
}
export class User {
    userId?: string;
    userEmail?: string;
    userName?: string;
    userAddress?: string;
    userPhone?: string;

    constructor(userId?: string, userEmail?: string, userName?: string, userAddress?: string, userPhone?: string ){
        this.userId = userId;
        this.userEmail = userEmail;
        this.userName = userName;
        this.userAddress = userAddress;
        this.userPhone = userPhone;
    }

    
}
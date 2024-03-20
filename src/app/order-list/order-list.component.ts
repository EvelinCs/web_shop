import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/order';
import { ConfirmDeleteDialogService } from '../confirm-delete-dialog/confirm-delete-dialog.service';
import { AuthService } from '../services/auth-service.service';
import { OrderListService } from './order-list.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss']
})
export class OrderListComponent implements OnInit {

  orderList: Order[] = [];

  displayedColumns: string[] = ['orderId', 'orderedItems', 'totalPrice', 'user', 'orderDate', 'deleteButton'];

  constructor(private confirmDeleteDialogService: ConfirmDeleteDialogService, private authService: AuthService,
    private orderListService: OrderListService){}

    ngOnInit() {
      this.loadOrders();
    }
  
    loadOrders(){
      this.orderListService.getOrders().subscribe(data => {
        this.orderList = data;
      });
    }

    deleteOrder(element: Order): void {
      let dialogRef = this.confirmDeleteDialogService.openConfirmDialog('Are you sure you want to delete this order?');
    
      this.authService.getAuthenticatedUser().subscribe(user => {
        if (user) {
          dialogRef.afterClosed().subscribe(result => {
            if (result) {
              //user clicked yes
              this.orderListService.deleteOrder(element.orderId).then(() => {
                this.loadOrders();
              }).catch(error => {
                console.error("Order couldn't be deleted", error);
              });
            }
          });
        } else {
          console.error('User must sign in to delete data');
        }
      });
    }

}

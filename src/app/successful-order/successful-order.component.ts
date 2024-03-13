import { Component } from '@angular/core';
import { SuccessfulOrderService } from './successful-order.service';

@Component({
  selector: 'app-successful-order',
  templateUrl: './successful-order.component.html',
  styleUrls: ['./successful-order.component.scss']
})
export class SuccessfulOrderComponent {
  successfulOrder = this.successfulOrderService.getSuccessfulOrder();

  displayedColumns: string[] = ['image', 'name', 'price', 'quantity', 'subtotal'];

  constructor(private successfulOrderService: SuccessfulOrderService){}

}

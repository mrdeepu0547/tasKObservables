import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-order-header',
  templateUrl: './order-header.component.html',
  styleUrls: ['./order-header.component.css']
})
export class OrderHeaderComponent implements OnInit {
  cartTotal: number;
  favouriteTotal: number;
  subscription: Subscription;

  constructor(private _orderService: OrderServiceService) {}
  ngOnInit() {
    this.subscription = this._orderService
      .getOrderCount()
      .subscribe((orderCount) => {
        this.cartTotal = orderCount.cartTotal;
        this.favouriteTotal = orderCount.favouriteTotal;
      });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

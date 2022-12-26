import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-order-dashboard',
  templateUrl: './order-dashboard.component.html',
  styleUrls: ['./order-dashboard.component.css']
})
export class OrderDashboardComponent implements OnInit {
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

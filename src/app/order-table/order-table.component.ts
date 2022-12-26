import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { OrderServiceService } from '../order-service.service';

@Component({
  selector: 'app-order-table',
  templateUrl: './order-table.component.html',
  styleUrls: ['./order-table.component.css']
})
export class OrderTableComponent implements OnInit {
  itemList = [
    { name: "Item 1", action: { inCart: false, isFavourite: false } },
    { name: "Item 2", action: { inCart: false, isFavourite: false } },
    { name: "Item 3", action: { inCart: false, isFavourite: false } }
  ];
  favouriteTotal: number;
  cartTotal: number;
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

  addToCart(item) {
    item.action.inCart = true;
    let count = {
      cartTotal: this.cartTotal + 1,
      favouriteTotal: this.favouriteTotal
    };
    this._orderService.setOrderCount(count);
  }

  addToWishList(item) {
    item.action.isFavourite = true;
    let count = {
      cartTotal: this.cartTotal,
      favouriteTotal: this.favouriteTotal + 1
    };
    this._orderService.setOrderCount(count);
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

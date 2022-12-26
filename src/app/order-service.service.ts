import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


interface OrderCount {
  cartTotal: number;
  favouriteTotal: number;
}

@Injectable({
  providedIn: 'root'
})
export class OrderServiceService {

  constructor() { }
   private _orderCount = new BehaviorSubject<OrderCount>({
    cartTotal: 0,
    favouriteTotal: 0
  });
  private _orderCount$ = this._orderCount.asObservable();

  getOrderCount(): Observable<OrderCount> {
    return this._orderCount$;
  }

  setOrderCount(latestValue: OrderCount) {
    return this._orderCount.next(latestValue);
  }
}

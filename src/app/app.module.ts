import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrderHeaderComponent } from './order-header/order-header.component';
import { OrderDashboardComponent } from './order-dashboard/order-dashboard.component';
import { OrderTableComponent } from './order-table/order-table.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderHeaderComponent,
    OrderDashboardComponent,
    OrderTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

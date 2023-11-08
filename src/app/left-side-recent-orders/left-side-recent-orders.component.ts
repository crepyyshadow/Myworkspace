import { Component, OnInit } from '@angular/core';
import { DashboardResponse } from '../dashboard-response';
import { ServiceApiService } from '../service-api.service';

@Component({
  selector: 'app-left-side-recent-orders',
  templateUrl: './left-side-recent-orders.component.html',
  styleUrls: ['./left-side-recent-orders.component.scss']
})
export class LeftSideRecentOrdersComponent implements OnInit {
 
  orderDetails: any;
  displayedColumns = ['customer', 'product', 'deliver date', 'status', 'trackingNumber', 'shipping'];
  constructor(private apiService: ServiceApiService ) {}
  ngOnInit(): void {
 
    this.fetchData();
  }

fetchData (): void {
  this.apiService.getdashboardData().subscribe({
    next: (data: DashboardResponse): void => {
      this.orderDetails = data.recent_orders;
      console.log(this.orderDetails);
    },
    error: (err: DashboardResponse): void => {
      console.log('Error', err);
    }
  });
  
  }
  
}
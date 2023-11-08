import { Component, OnInit } from '@angular/core';
import { ServiceApiService } from '../service-api.service';
import { DashboardResponse } from '../dashboard-response';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.scss']
})
export class MainDashboardComponent implements OnInit {

  apiData: any;

  constructor(private apiService: ServiceApiService) {}
  ngOnInit(): void {
    this.fetchData();
  }

fetchData (): void {
  this.apiService.getdashboardData().subscribe({
    next: (data: DashboardResponse): void => {
      this.apiData = data;
     // console.log(this.apiData);
    },
    error: (err: DashboardResponse): void => {
      console.log('Error', err);
    }
  });
  
  }
  
}


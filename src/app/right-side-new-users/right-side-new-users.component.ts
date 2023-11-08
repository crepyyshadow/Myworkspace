import { Component, OnInit } from '@angular/core';
import { DashboardResponse } from '../dashboard-response';
import { ServiceApiService } from '../service-api.service';

@Component({
  selector: 'app-right-side-new-users',
  templateUrl: './right-side-new-users.component.html',
  styleUrls: ['./right-side-new-users.component.scss']
})
export class RightSideNewUsersComponent implements OnInit {
 
  userDetails: any;

  constructor(private apiService: ServiceApiService ) {}
  ngOnInit(): void {
 
    this.fetchData();
  }

fetchData (): void {
  this.apiService.getdashboardData().subscribe({
    next: (data: DashboardResponse): void => {
      this.userDetails = data.new_users;
      console.log(this.userDetails);
    },
    error: (err: DashboardResponse): void => {
      console.log('Error', err);
    }
  });
  
  }
  
}
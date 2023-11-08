import { Component, OnInit} from '@angular/core';
import { ServiceApiService } from '../service-api.service';
import { DashboardResponse } from '../dashboard-response';

@Component({
  selector: 'app-top-data-cards',
  templateUrl: './top-data-cards.component.html',
  styleUrls: ['./top-data-cards.component.scss']
})
export class TopDataCardsComponent implements OnInit {
 
  topDataCards: any;

  constructor(private apiService: ServiceApiService ) {}
  ngOnInit(): void {
 
    this.fetchData();
  }

fetchData (): void {
  this.apiService.getdashboardData().subscribe({
    next: (data: DashboardResponse): void => {
      this.topDataCards = data.top_cards;
      console.log(this.topDataCards);
    },
    error: (err: DashboardResponse): void => {
      console.log('Error', err);
    }
  });
  
  }
  
}
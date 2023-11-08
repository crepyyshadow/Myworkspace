import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DashboardResponse } from './dashboard-response';

const apiEndpoint = 'https://1.api.fy23ey05.careers.ifelsecloud.com/';
@Injectable({
  providedIn: 'root'
})
export class ServiceApiService {

  constructor(private httpClient: HttpClient) {}

  getdashboardData(): Observable<DashboardResponse> {
  //  alert('enter');
    return this.httpClient.get<DashboardResponse>(apiEndpoint);
  }
}

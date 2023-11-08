import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TopDataCardsComponent } from './top-data-cards/top-data-cards.component';
import { RouterModule } from '@angular/router';
import { LeftNavigationComponent } from './left-navigation/left-navigation.component';
import { TopNavigationComponent } from './top-navigation/top-navigation.component';
import { RightSideNewUsersComponent } from './right-side-new-users/right-side-new-users.component';
import { LeftSideRecentOrdersComponent } from './left-side-recent-orders/left-side-recent-orders.component';
import { BottomGraphsCardsComponent } from './bottom-graphs-cards/bottom-graphs-cards.component';
import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { KeyValuePipe } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    TopDataCardsComponent,
    LeftNavigationComponent,
    TopNavigationComponent,
    RightSideNewUsersComponent,
    LeftSideRecentOrdersComponent,
    BottomGraphsCardsComponent,
    MainDashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'dashboard', component: MainDashboardComponent}
    ]),
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatProgressBarModule,
    MatListModule,
    MatSidenavModule,
    MatButtonModule,
    MatTableModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    NgChartsModule,
    HighchartsChartModule 
  ],
  providers: [HttpClientModule, KeyValuePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }

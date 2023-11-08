import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftSideRecentOrdersComponent } from './left-side-recent-orders.component';

describe('LeftSideRecentOrdersComponent', () => {
  let component: LeftSideRecentOrdersComponent;
  let fixture: ComponentFixture<LeftSideRecentOrdersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftSideRecentOrdersComponent]
    });
    fixture = TestBed.createComponent(LeftSideRecentOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

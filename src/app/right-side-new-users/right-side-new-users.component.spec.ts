import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightSideNewUsersComponent } from './right-side-new-users.component';

describe('RightSideNewUsersComponent', () => {
  let component: RightSideNewUsersComponent;
  let fixture: ComponentFixture<RightSideNewUsersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightSideNewUsersComponent]
    });
    fixture = TestBed.createComponent(RightSideNewUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

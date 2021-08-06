import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityFeedsComponent } from './activity-feeds.component';

describe('ActivityFeedsComponent', () => {
  let component: ActivityFeedsComponent;
  let fixture: ComponentFixture<ActivityFeedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActivityFeedsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityFeedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

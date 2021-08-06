import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeCostComponent } from './fee-cost.component';

describe('FeeCostComponent', () => {
  let component: FeeCostComponent;
  let fixture: ComponentFixture<FeeCostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeCostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeCostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

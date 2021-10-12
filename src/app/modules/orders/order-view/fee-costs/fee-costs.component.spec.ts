import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeCostsComponent } from './fee-costs.component';

describe('FeeCostsComponent', () => {
  let component: FeeCostsComponent;
  let fixture: ComponentFixture<FeeCostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeeCostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeeCostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

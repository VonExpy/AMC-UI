import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraisersComponent } from './appraisers.component';

describe('AppraisersComponent', () => {
  let component: AppraisersComponent;
  let fixture: ComponentFixture<AppraisersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppraisersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

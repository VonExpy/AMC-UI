import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppraiserDueComponent } from './appraiser-due.component';

describe('AppraiserDueComponent', () => {
  let component: AppraiserDueComponent;
  let fixture: ComponentFixture<AppraiserDueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppraiserDueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppraiserDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

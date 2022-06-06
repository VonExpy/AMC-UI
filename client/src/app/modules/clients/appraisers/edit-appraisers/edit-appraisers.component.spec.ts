import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAppraisersComponent } from './edit-appraisers.component';

describe('EditAppraisersComponent', () => {
  let component: EditAppraisersComponent;
  let fixture: ComponentFixture<EditAppraisersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAppraisersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditAppraisersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

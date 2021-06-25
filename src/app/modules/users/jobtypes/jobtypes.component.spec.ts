import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobtypesComponent } from './jobtypes.component';

describe('JobtypesComponent', () => {
  let component: JobtypesComponent;
  let fixture: ComponentFixture<JobtypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobtypesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobtypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

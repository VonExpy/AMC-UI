import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddZipcodesComponent } from './add-zipcodes.component';

describe('AddZipcodesComponent', () => {
  let component: AddZipcodesComponent;
  let fixture: ComponentFixture<AddZipcodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddZipcodesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddZipcodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

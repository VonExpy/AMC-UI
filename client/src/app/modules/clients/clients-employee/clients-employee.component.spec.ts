import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsEmployeeComponent } from './clients-employee.component';

describe('ClientsEmployeeComponent', () => {
  let component: ClientsEmployeeComponent;
  let fixture: ComponentFixture<ClientsEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClientsEmployeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

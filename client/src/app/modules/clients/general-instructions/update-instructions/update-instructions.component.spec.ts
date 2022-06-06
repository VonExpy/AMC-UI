import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateInstructionsComponent } from './update-instructions.component';

describe('UpdateInstructionsComponent', () => {
  let component: UpdateInstructionsComponent;
  let fixture: ComponentFixture<UpdateInstructionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateInstructionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateInstructionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

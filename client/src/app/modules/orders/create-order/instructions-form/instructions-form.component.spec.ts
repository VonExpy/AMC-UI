import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstructionsFormComponent } from './instructions-form.component';

describe('InstructionsFormComponent', () => {
  let component: InstructionsFormComponent;
  let fixture: ComponentFixture<InstructionsFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstructionsFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstructionsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

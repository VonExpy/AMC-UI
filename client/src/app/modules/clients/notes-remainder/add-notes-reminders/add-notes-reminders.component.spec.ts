import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNotesRemindersComponent } from './add-notes-reminders.component';

describe('AddNotesRemindersComponent', () => {
  let component: AddNotesRemindersComponent;
  let fixture: ComponentFixture<AddNotesRemindersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNotesRemindersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNotesRemindersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

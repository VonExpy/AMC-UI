import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesRemainderComponent } from './notes-remainder.component';

describe('NotesRemainderComponent', () => {
  let component: NotesRemainderComponent;
  let fixture: ComponentFixture<NotesRemainderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesRemainderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesRemainderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

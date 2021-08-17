import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromissoryComponent } from './promissory.component';

describe('PromissoryComponent', () => {
  let component: PromissoryComponent;
  let fixture: ComponentFixture<PromissoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromissoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromissoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

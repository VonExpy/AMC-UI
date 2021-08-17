import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromissoryMainComponent } from './promissory-main.component';

describe('PromissoryMainComponent', () => {
  let component: PromissoryMainComponent;
  let fixture: ComponentFixture<PromissoryMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromissoryMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromissoryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

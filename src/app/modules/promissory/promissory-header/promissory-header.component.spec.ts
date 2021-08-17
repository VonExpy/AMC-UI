import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromissoryHeaderComponent } from './promissory-header.component';

describe('PromissoryHeaderComponent', () => {
  let component: PromissoryHeaderComponent;
  let fixture: ComponentFixture<PromissoryHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromissoryHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromissoryHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

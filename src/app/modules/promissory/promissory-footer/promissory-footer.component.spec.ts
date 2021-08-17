import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromissoryFooterComponent } from './promissory-footer.component';

describe('PromissoryFooterComponent', () => {
  let component: PromissoryFooterComponent;
  let fixture: ComponentFixture<PromissoryFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromissoryFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PromissoryFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

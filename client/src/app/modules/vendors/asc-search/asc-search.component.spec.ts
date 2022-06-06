import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AscSearchComponent } from './asc-search.component';

describe('AscSearchComponent', () => {
  let component: AscSearchComponent;
  let fixture: ComponentFixture<AscSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AscSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AscSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

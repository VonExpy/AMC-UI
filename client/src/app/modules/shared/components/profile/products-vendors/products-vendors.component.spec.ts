import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsVendorsComponent } from './products-vendors.component';

describe('ProductsVendorsComponent', () => {
  let component: ProductsVendorsComponent;
  let fixture: ComponentFixture<ProductsVendorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductsVendorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsVendorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

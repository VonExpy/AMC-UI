import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidGuageComponent } from './solid-guage.component';

describe('SolidGuageComponent', () => {
  let component: SolidGuageComponent;
  let fixture: ComponentFixture<SolidGuageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SolidGuageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidGuageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

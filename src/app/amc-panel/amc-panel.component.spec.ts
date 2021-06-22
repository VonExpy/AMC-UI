import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmcPanelComponent } from './amc-panel.component';

describe('AmcPanelComponent', () => {
  let component: AmcPanelComponent;
  let fixture: ComponentFixture<AmcPanelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmcPanelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmcPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

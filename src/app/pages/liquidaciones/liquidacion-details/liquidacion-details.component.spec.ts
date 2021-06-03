import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiquidacionDetailsComponent } from './liquidacion-details.component';

describe('LiquidacionDetailsComponent', () => {
  let component: LiquidacionDetailsComponent;
  let fixture: ComponentFixture<LiquidacionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiquidacionDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LiquidacionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

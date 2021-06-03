import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLiquidacionesComponent } from './view-liquidaciones.component';

describe('ViewLiquidacionesComponent', () => {
  let component: ViewLiquidacionesComponent;
  let fixture: ComponentFixture<ViewLiquidacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewLiquidacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLiquidacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

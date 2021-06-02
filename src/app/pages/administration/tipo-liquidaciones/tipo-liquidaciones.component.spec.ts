import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TipoLiquidacionesComponent } from './tipo-liquidaciones.component';

describe('TipoLiquidacionesComponent', () => {
  let component: TipoLiquidacionesComponent;
  let fixture: ComponentFixture<TipoLiquidacionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TipoLiquidacionesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TipoLiquidacionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

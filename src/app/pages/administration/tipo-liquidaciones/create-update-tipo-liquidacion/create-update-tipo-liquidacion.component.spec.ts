import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateTipoLiquidacionComponent } from './create-update-tipo-liquidacion.component';

describe('CreateUpdateTipoLiquidacionComponent', () => {
  let component: CreateUpdateTipoLiquidacionComponent;
  let fixture: ComponentFixture<CreateUpdateTipoLiquidacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateTipoLiquidacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateTipoLiquidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

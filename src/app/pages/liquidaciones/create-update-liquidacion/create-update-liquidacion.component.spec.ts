import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateLiquidacionComponent } from './create-update-liquidacion.component';

describe('CreateUpdateLiquidacionComponent', () => {
  let component: CreateUpdateLiquidacionComponent;
  let fixture: ComponentFixture<CreateUpdateLiquidacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateLiquidacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateLiquidacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

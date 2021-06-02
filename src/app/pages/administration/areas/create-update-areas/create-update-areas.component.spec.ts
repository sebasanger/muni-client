import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateUpdateAreasComponent } from './create-update-areas.component';

describe('CreateUpdateAreasComponent', () => {
  let component: CreateUpdateAreasComponent;
  let fixture: ComponentFixture<CreateUpdateAreasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateUpdateAreasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateUpdateAreasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

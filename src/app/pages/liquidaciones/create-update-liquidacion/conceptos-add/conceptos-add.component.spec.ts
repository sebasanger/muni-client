import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptosAddComponent } from './conceptos-add.component';

describe('ConceptosAddComponent', () => {
  let component: ConceptosAddComponent;
  let fixture: ComponentFixture<ConceptosAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConceptosAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptosAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

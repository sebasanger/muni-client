import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListConceptosComponent } from './list-conceptos.component';

describe('ListConceptosComponent', () => {
  let component: ListConceptosComponent;
  let fixture: ComponentFixture<ListConceptosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListConceptosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListConceptosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

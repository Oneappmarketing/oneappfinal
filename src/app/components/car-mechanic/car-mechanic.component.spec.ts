import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarMechanicComponent } from './car-mechanic.component';

describe('CarMechanicComponent', () => {
  let component: CarMechanicComponent;
  let fixture: ComponentFixture<CarMechanicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarMechanicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarMechanicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

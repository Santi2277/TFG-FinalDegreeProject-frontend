import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEjercicioDetalleComponent } from './e-ejercicio-detalle.component';

describe('EEjercicioDetalleComponent', () => {
  let component: EEjercicioDetalleComponent;
  let fixture: ComponentFixture<EEjercicioDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EEjercicioDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EEjercicioDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

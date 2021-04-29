import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEjercicioEditarComponent } from './e-ejercicio-editar.component';

describe('EEjercicioEditarComponent', () => {
  let component: EEjercicioEditarComponent;
  let fixture: ComponentFixture<EEjercicioEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EEjercicioEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EEjercicioEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

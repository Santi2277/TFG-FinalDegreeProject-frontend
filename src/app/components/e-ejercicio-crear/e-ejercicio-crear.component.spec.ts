import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEjercicioCrearComponent } from './e-ejercicio-crear.component';

describe('EEjercicioCrearComponent', () => {
  let component: EEjercicioCrearComponent;
  let fixture: ComponentFixture<EEjercicioCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EEjercicioCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EEjercicioCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

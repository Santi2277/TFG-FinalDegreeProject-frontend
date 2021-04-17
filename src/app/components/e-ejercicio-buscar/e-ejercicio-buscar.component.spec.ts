import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EEjercicioBuscarComponent } from './e-ejercicio-buscar.component';

describe('EEjercicioBuscarComponent', () => {
  let component: EEjercicioBuscarComponent;
  let fixture: ComponentFixture<EEjercicioBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EEjercicioBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EEjercicioBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

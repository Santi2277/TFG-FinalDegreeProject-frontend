import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjercicioListaComponent } from './ejercicio-lista.component';

describe('EjercicioListaComponent', () => {
  let component: EjercicioListaComponent;
  let fixture: ComponentFixture<EjercicioListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjercicioListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjercicioListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

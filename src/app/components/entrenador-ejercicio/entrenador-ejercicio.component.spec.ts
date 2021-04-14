import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorEjercicioComponent } from './entrenador-ejercicio.component';

describe('EntrenadorEjercicioComponent', () => {
  let component: EntrenadorEjercicioComponent;
  let fixture: ComponentFixture<EntrenadorEjercicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrenadorEjercicioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorEjercicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

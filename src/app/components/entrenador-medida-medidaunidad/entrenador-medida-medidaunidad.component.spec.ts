import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorMedidaMedidaunidadComponent } from './entrenador-medida-medidaunidad.component';

describe('EntrenadorMedidaMedidaunidadComponent', () => {
  let component: EntrenadorMedidaMedidaunidadComponent;
  let fixture: ComponentFixture<EntrenadorMedidaMedidaunidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrenadorMedidaMedidaunidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorMedidaMedidaunidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

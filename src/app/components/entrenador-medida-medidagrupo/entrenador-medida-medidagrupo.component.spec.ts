import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorMedidaMedidagrupoComponent } from './entrenador-medida-medidagrupo.component';

describe('EntrenadorMedidaMedidagrupoComponent', () => {
  let component: EntrenadorMedidaMedidagrupoComponent;
  let fixture: ComponentFixture<EntrenadorMedidaMedidagrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrenadorMedidaMedidagrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorMedidaMedidagrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

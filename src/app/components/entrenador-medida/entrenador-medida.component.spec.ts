import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorMedidaComponent } from './entrenador-medida.component';

describe('EntrenadorMedidaComponent', () => {
  let component: EntrenadorMedidaComponent;
  let fixture: ComponentFixture<EntrenadorMedidaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrenadorMedidaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorMedidaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

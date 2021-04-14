import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorMedidaMedidavalorComponent } from './entrenador-medida-medidavalor.component';

describe('EntrenadorMedidaMedidavalorComponent', () => {
  let component: EntrenadorMedidaMedidavalorComponent;
  let fixture: ComponentFixture<EntrenadorMedidaMedidavalorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrenadorMedidaMedidavalorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorMedidaMedidavalorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

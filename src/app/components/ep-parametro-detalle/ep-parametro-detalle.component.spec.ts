import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpParametroDetalleComponent } from './ep-parametro-detalle.component';

describe('EpParametroDetalleComponent', () => {
  let component: EpParametroDetalleComponent;
  let fixture: ComponentFixture<EpParametroDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpParametroDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpParametroDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

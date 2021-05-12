import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpParametrogrupoDetalleComponent } from './ep-parametrogrupo-detalle.component';

describe('EpParametrogrupoDetalleComponent', () => {
  let component: EpParametrogrupoDetalleComponent;
  let fixture: ComponentFixture<EpParametrogrupoDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpParametrogrupoDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpParametrogrupoDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

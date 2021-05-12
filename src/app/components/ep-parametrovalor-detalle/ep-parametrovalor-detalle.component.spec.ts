import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpParametrovalorDetalleComponent } from './ep-parametrovalor-detalle.component';

describe('EpParametrovalorDetalleComponent', () => {
  let component: EpParametrovalorDetalleComponent;
  let fixture: ComponentFixture<EpParametrovalorDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpParametrovalorDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpParametrovalorDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpParametrosubvalorDetalleComponent } from './ep-parametrosubvalor-detalle.component';

describe('EpParametrosubvalorDetalleComponent', () => {
  let component: EpParametrosubvalorDetalleComponent;
  let fixture: ComponentFixture<EpParametrosubvalorDetalleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpParametrosubvalorDetalleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpParametrosubvalorDetalleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpParametrosubvalorBuscarComponent } from './ep-parametrosubvalor-buscar.component';

describe('EpParametrosubvalorBuscarComponent', () => {
  let component: EpParametrosubvalorBuscarComponent;
  let fixture: ComponentFixture<EpParametrosubvalorBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpParametrosubvalorBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpParametrosubvalorBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

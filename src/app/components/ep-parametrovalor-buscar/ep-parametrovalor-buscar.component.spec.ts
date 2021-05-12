import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpParametrovalorBuscarComponent } from './ep-parametrovalor-buscar.component';

describe('EpParametrovalorBuscarComponent', () => {
  let component: EpParametrovalorBuscarComponent;
  let fixture: ComponentFixture<EpParametrovalorBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpParametrovalorBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpParametrovalorBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

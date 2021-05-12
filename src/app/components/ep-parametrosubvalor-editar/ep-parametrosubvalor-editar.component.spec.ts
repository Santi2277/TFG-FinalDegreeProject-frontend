import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpParametrosubvalorEditarComponent } from './ep-parametrosubvalor-editar.component';

describe('EpParametrosubvalorEditarComponent', () => {
  let component: EpParametrosubvalorEditarComponent;
  let fixture: ComponentFixture<EpParametrosubvalorEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpParametrosubvalorEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpParametrosubvalorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

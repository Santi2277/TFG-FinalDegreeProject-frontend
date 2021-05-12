import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpParametrogrupoEditarComponent } from './ep-parametrogrupo-editar.component';

describe('EpParametrogrupoEditarComponent', () => {
  let component: EpParametrogrupoEditarComponent;
  let fixture: ComponentFixture<EpParametrogrupoEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpParametrogrupoEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpParametrogrupoEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

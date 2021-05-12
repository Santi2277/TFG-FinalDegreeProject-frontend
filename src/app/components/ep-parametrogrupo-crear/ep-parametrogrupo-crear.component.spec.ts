import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpParametrogrupoCrearComponent } from './ep-parametrogrupo-crear.component';

describe('EpParametrogrupoCrearComponent', () => {
  let component: EpParametrogrupoCrearComponent;
  let fixture: ComponentFixture<EpParametrogrupoCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpParametrogrupoCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpParametrogrupoCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

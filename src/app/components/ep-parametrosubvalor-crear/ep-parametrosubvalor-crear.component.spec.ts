import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpParametrosubvalorCrearComponent } from './ep-parametrosubvalor-crear.component';

describe('EpParametrosubvalorCrearComponent', () => {
  let component: EpParametrosubvalorCrearComponent;
  let fixture: ComponentFixture<EpParametrosubvalorCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpParametrosubvalorCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpParametrosubvalorCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpParametrovalorCrearComponent } from './ep-parametrovalor-crear.component';

describe('EpParametrovalorCrearComponent', () => {
  let component: EpParametrovalorCrearComponent;
  let fixture: ComponentFixture<EpParametrovalorCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpParametrovalorCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpParametrovalorCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

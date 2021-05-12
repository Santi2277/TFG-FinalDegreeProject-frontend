import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpParametrovalorEditarComponent } from './ep-parametrovalor-editar.component';

describe('EpParametrovalorEditarComponent', () => {
  let component: EpParametrovalorEditarComponent;
  let fixture: ComponentFixture<EpParametrovalorEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpParametrovalorEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpParametrovalorEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

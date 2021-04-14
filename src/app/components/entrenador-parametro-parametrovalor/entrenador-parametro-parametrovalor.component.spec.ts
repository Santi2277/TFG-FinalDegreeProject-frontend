import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorParametroParametrovalorComponent } from './entrenador-parametro-parametrovalor.component';

describe('EntrenadorParametroParametrovalorComponent', () => {
  let component: EntrenadorParametroParametrovalorComponent;
  let fixture: ComponentFixture<EntrenadorParametroParametrovalorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrenadorParametroParametrovalorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorParametroParametrovalorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

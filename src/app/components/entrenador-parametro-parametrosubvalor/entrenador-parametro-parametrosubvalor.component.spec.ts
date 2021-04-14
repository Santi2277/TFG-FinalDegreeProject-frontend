import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorParametroParametrosubvalorComponent } from './entrenador-parametro-parametrosubvalor.component';

describe('EntrenadorParametroParametrosubvalorComponent', () => {
  let component: EntrenadorParametroParametrosubvalorComponent;
  let fixture: ComponentFixture<EntrenadorParametroParametrosubvalorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrenadorParametroParametrosubvalorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorParametroParametrosubvalorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

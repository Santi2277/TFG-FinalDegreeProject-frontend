import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorParametroParametrogrupoComponent } from './entrenador-parametro-parametrogrupo.component';

describe('EntrenadorParametroParametrogrupoComponent', () => {
  let component: EntrenadorParametroParametrogrupoComponent;
  let fixture: ComponentFixture<EntrenadorParametroParametrogrupoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrenadorParametroParametrogrupoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorParametroParametrogrupoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorParametroParametroComponent } from './entrenador-parametro-parametro.component';

describe('EntrenadorParametroParametroComponent', () => {
  let component: EntrenadorParametroParametroComponent;
  let fixture: ComponentFixture<EntrenadorParametroParametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrenadorParametroParametroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorParametroParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

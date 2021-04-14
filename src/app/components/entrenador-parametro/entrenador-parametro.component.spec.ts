import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrenadorParametroComponent } from './entrenador-parametro.component';

describe('EntrenadorParametroComponent', () => {
  let component: EntrenadorParametroComponent;
  let fixture: ComponentFixture<EntrenadorParametroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrenadorParametroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrenadorParametroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

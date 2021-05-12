import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpParametroBuscarComponent } from './ep-parametro-buscar.component';

describe('EpParametroBuscarComponent', () => {
  let component: EpParametroBuscarComponent;
  let fixture: ComponentFixture<EpParametroBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpParametroBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpParametroBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

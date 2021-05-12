import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpParametrogrupoBuscarComponent } from './ep-parametrogrupo-buscar.component';

describe('EpParametrogrupoBuscarComponent', () => {
  let component: EpParametrogrupoBuscarComponent;
  let fixture: ComponentFixture<EpParametrogrupoBuscarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpParametrogrupoBuscarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpParametrogrupoBuscarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

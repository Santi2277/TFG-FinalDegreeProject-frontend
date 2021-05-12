import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpParametroEditarComponent } from './ep-parametro-editar.component';

describe('EpParametroEditarComponent', () => {
  let component: EpParametroEditarComponent;
  let fixture: ComponentFixture<EpParametroEditarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpParametroEditarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpParametroEditarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

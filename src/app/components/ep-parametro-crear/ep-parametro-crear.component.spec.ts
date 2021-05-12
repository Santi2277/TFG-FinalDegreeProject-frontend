import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EpParametroCrearComponent } from './ep-parametro-crear.component';

describe('EpParametroCrearComponent', () => {
  let component: EpParametroCrearComponent;
  let fixture: ComponentFixture<EpParametroCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EpParametroCrearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EpParametroCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

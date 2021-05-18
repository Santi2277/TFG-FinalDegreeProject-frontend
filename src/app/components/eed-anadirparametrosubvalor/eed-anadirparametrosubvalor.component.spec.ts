import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EedAnadirparametrosubvalorComponent } from './eed-anadirparametrosubvalor.component';

describe('EedAnadirparametrosubvalorComponent', () => {
  let component: EedAnadirparametrosubvalorComponent;
  let fixture: ComponentFixture<EedAnadirparametrosubvalorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EedAnadirparametrosubvalorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EedAnadirparametrosubvalorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

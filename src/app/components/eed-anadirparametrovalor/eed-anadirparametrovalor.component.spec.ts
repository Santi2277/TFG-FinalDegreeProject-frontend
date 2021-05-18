import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EedAnadirparametrovalorComponent } from './eed-anadirparametrovalor.component';

describe('EedAnadirparametrovalorComponent', () => {
  let component: EedAnadirparametrovalorComponent;
  let fixture: ComponentFixture<EedAnadirparametrovalorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EedAnadirparametrovalorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EedAnadirparametrovalorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

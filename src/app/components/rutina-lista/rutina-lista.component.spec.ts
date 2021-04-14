import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RutinaListaComponent } from './rutina-lista.component';

describe('RutinaListaComponent', () => {
  let component: RutinaListaComponent;
  let fixture: ComponentFixture<RutinaListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RutinaListaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RutinaListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

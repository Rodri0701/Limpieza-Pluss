import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonClaro } from './button-claro';

describe('ButtonClaro', () => {
  let component: ButtonClaro;
  let fixture: ComponentFixture<ButtonClaro>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ButtonClaro],
    }).compileComponents();

    fixture = TestBed.createComponent(ButtonClaro);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

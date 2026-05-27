import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagehero } from './pagehero';

describe('Pagehero', () => {
  let component: Pagehero;
  let fixture: ComponentFixture<Pagehero>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagehero],
    }).compileComponents();

    fixture = TestBed.createComponent(Pagehero);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

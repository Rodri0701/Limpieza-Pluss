import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetasInfo } from './tarjetas-info';

describe('TarjetasInfo', () => {
  let component: TarjetasInfo;
  let fixture: ComponentFixture<TarjetasInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetasInfo],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetasInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

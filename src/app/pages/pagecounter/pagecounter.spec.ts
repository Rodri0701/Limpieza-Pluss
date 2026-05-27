import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagecounter } from './pagecounter';

describe('Pagecounter', () => {
  let component: Pagecounter;
  let fixture: ComponentFixture<Pagecounter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Pagecounter],
    }).compileComponents();

    fixture = TestBed.createComponent(Pagecounter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

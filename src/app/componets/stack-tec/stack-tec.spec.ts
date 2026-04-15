import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackTec } from './stack-tec';

describe('StackTec', () => {
  let component: StackTec;
  let fixture: ComponentFixture<StackTec>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StackTec],
    }).compileComponents();

    fixture = TestBed.createComponent(StackTec);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Q6Component } from './q6.component';

describe('Q6Component', () => {
  let component: Q6Component;
  let fixture: ComponentFixture<Q6Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Q6Component]
    });
    fixture = TestBed.createComponent(Q6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

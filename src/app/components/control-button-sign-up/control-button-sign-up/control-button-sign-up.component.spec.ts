import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlButtonSignUpComponent } from './control-button-sign-up.component';

describe('ControlButtonSignUpComponent', () => {
  let component: ControlButtonSignUpComponent;
  let fixture: ComponentFixture<ControlButtonSignUpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlButtonSignUpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlButtonSignUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

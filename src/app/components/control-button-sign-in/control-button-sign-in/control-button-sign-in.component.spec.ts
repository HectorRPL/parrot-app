import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlButtonSignInComponent } from './control-button-sign-in.component';

describe('ControlButtonSignInComponent', () => {
  let component: ControlButtonSignInComponent;
  let fixture: ComponentFixture<ControlButtonSignInComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlButtonSignInComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlButtonSignInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

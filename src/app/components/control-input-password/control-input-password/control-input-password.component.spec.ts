import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlInputPasswordComponent } from './control-input-password.component';

describe('ControlInputPasswordComponent', () => {
  let component: ControlInputPasswordComponent;
  let fixture: ComponentFixture<ControlInputPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlInputPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlInputPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

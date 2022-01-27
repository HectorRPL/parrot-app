import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ControlInputEmailComponent } from './control-input-email.component';

describe('ControlInputEmailComponent', () => {
  let component: ControlInputEmailComponent;
  let fixture: ComponentFixture<ControlInputEmailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ControlInputEmailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlInputEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

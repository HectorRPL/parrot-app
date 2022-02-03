import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../../../../models/user/user-model';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-form-sign-in',
  templateUrl: './form-sign-in.component.html',
  styleUrls: ['./form-sign-in.component.css']
})
export class FormSignInComponent implements OnInit {

  @Input() user: UserModel = new UserModel('', '');

  @Output() isValid: boolean = false;
  @Output() formValue = new EventEmitter<UserModel>();

  signInForm: FormGroup = new FormGroup({});
  destroy$ = new Subject();

  constructor(
    private fb: FormBuilder,
  ) {
  }

  ngOnInit(): void {
    this.createForm(this.user);
    this.listenFormValues();
    this.listenFormStatus();
  }

  createForm(user: UserModel = new UserModel('', '')): void {
    this.signInForm = this.fb.group({
      'username': new FormControl(
        this.user.username,
        [
          Validators.required,
          Validators.email
        ]),
      'password': new FormControl(
        user.password,
        [
          Validators.required
        ]),
    });
  }

  listenFormValues(): void {
    this.signInForm.valueChanges
      .pipe(
        map((x) => {
          console.log(x);
        }),
        takeUntil(this.destroy$),
      ).subscribe((x) => {
      console.log(x);
    });
  }

  listenFormStatus(): void {
    this.signInForm.statusChanges
      .pipe(
        takeUntil(this.destroy$)
      )
      .subscribe(
        (formStatus: string) => {
          if (formStatus === 'VALID') {
            this.emitUser()
          }
      });
  }

  emitUser(): void {
    const user: UserModel = {
      username: this.signInForm.get('username')?.value,
      password: this.signInForm.get('password')?.value,
    };
    this.formValue.emit(user);
  }

}

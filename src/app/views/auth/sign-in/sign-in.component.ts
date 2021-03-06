import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../../../models/user/user-model';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  user: UserModel = new UserModel('', '');
  isValid: boolean = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  getUser(user: UserModel) {
    this.user = user;
  }

  getIsValid(isValid: boolean) {
    this.isValid = isValid;
  }

}

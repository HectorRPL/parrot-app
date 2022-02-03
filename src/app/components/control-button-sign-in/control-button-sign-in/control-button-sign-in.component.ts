import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';
import { UserModel } from '../../../../models/user/user-model';

@Component({
  selector: 'app-control-button-sign-in',
  templateUrl: './control-button-sign-in.component.html',
  styleUrls: ['./control-button-sign-in.component.css']
})
export class ControlButtonSignInComponent implements OnInit {

  @Input() user: UserModel = new UserModel('', '');

  constructor(
    private authService: AuthService,
  ) {
  }

  ngOnInit(): void {
  }

  createToken(user: UserModel): void {
    this.authService.getToken(user)
      .pipe()
      .subscribe(
        value => console.log(value),
        error => console.log(error),
      );
  }

}

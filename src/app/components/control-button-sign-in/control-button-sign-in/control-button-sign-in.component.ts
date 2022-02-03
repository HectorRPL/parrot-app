import { Component, Input, OnInit } from '@angular/core';
import { AuthService } from '../../../../services/auth/auth.service';
import { UserModel } from '../../../../models/user/user-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-button-sign-in',
  templateUrl: './control-button-sign-in.component.html',
  styleUrls: ['./control-button-sign-in.component.css']
})
export class ControlButtonSignInComponent implements OnInit {

  @Input() user: UserModel = new UserModel('', '');
  @Input() isValid: boolean = false;

  constructor(
    private authService: AuthService,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
  }

  createToken(user: UserModel): void {
    this.authService.getToken(user)
      .pipe()
      .subscribe(
        value => this.router.navigate([`/order/details`]),
        error => console.log(error),
      );
  }

}

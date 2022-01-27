import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user/user-model';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(
    private auth: AuthService
  ) {
  }

  ngOnInit() {
    const user: UserModel = {
      'username': 'android-challenge@parrotsoftware.io',
      'password': '8mngDhoPcB3ckV7X'
    };
    this.getToken(user);
  }

  getToken(user: UserModel) {
    this.auth.getToken(user).pipe().subscribe(
      value => console.log(value),
      error => console.log(error),
    )
  }

}

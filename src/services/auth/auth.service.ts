import { Injectable } from '@angular/core';
import { TokenModel } from '../../models/auth/token-model';
import { Observable, throwError } from 'rxjs';
import { UserModel } from '../../models/user/user-model';
import { HOST } from '../../shared/port/port';
import { HttpClient } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';

@Injectable()
export class AuthService {

  constructor(
    public httpClient: HttpClient
  ) {
  }

  getToken(user: UserModel): Observable<TokenModel> {
    const URL = `${HOST}api/auth/token`;

    return this.httpClient
      .post<TokenModel>(URL, user)
      .pipe(
        catchError(err => throwError(err)),
        tap((token: TokenModel) => token ? this.storeToken(token) : this.logout()),
      )
  }

  private storeToken(token: TokenModel) {
    localStorage.setItem('token', JSON.stringify(token));
    // emit the event
  }

  logout() {
    this.deleteToken();
    // to redirect function
  }

  private deleteToken() {
    localStorage.removeItem('token');
    // emit the event
  }


}

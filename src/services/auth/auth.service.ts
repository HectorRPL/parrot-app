import { Injectable } from '@angular/core';
import { TokenModel } from '../../models/auth/token-model';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { UserModel } from '../../models/user/user-model';
import { HOST } from '../../shared/port/port';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, delay, map, retryWhen, take, tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

  private tokenSubject: BehaviorSubject<TokenModel>;
  public token$: Observable<TokenModel>;

  constructor(
    private router: Router,
    public httpClient: HttpClient,
  ) {

    // @ts-ignore
    this.tokenSubject = new BehaviorSubject<TokenModel>(null); // check this in angular documentation
    this.token$ = this.tokenSubject.asObservable();
  }

  getToken(user: UserModel): Observable<TokenModel> {
    const URL = `${HOST}api/auth/token`;

    return this.httpClient
      .post<TokenModel>(URL, user)
      .pipe(
        map((token: TokenModel) => {
          this.tokenSubject.next(token);
          this.startRefreshTokenTimer();
          return token;
        }),
        catchError(err => throwError(err)),
        tap((token: TokenModel) => token ? this.storeToken(token) : this.logout()),
      )
  }

  private storeToken(token: TokenModel) {
    const {refresh, access} = token;
    localStorage.setItem('refresh', JSON.stringify(refresh));
    localStorage.setItem('access', JSON.stringify(access));
    // emit the event
  }

  logout() {
    this.removeToken();
    this.stopRefreshTokenTimer();
    // @ts-ignore
    this.tokenSubject.next(null);
    this.router.navigate(['/login']).then();
  }

  private removeToken() {
    localStorage.removeItem('refresh');
    localStorage.removeItem('access');
    // emit the event
  }

  refreshToken(): Observable<TokenModel> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
    const URL = `${HOST}api/auth/token/refresh`;
    const refresh: string | null = this.getRefresh();

    return this.httpClient
      .post<TokenModel>(URL, {refresh}, httpOptions)
      .pipe(
        retryWhen(errors => errors.pipe(delay(1000), take(10))),
        catchError(err => throwError(err)),
        tap((token: TokenModel) => token.refresh ? this.storeToken(token) : this.logout()),
      )
  }

  // @ts-ignore
  private refreshTokenTimeout;

  private startRefreshTokenTimer() {
    const minutes: number = 25;
    const milliseconds: number = 1000 * 60 * minutes;

    // set a timeout to refresh the token 25 minutes before it expires
    this.refreshTokenTimeout = setInterval(() => {
        this.refreshToken()
          .subscribe(
            value => this.refreshToken()
          )
      },
      milliseconds
    );
  }

  private stopRefreshTokenTimer() {
    clearTimeout(this.refreshTokenTimeout);
  }

  getRefresh(): string | null {
    return localStorage.getItem('refresh')
      ? JSON.parse(<string>localStorage.getItem('refresh'))
      : null;
  }


}



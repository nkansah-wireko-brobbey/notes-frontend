import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static loginStatus = false;

  constructor() { }

  public setLoginStatus(status: boolean){
    AuthService.loginStatus = status;
  }

  public isUserLoggedIn(): boolean{
    return AuthService.loginStatus;
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static loginStatus = false;

  constructor() { }

  public setLoginStatus(status: boolean){
    localStorage.setItem('loggedIn', status.toString());
    AuthService.loginStatus = status;
  }

  public isUserLoggedIn(): boolean{
    return (Boolean)(localStorage.getItem('loggedIn'));
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loginStatus = false;

  constructor() { }

  public setLoginStatus(status: boolean){
    this.loginStatus = status;
  }

  public isUserLoggedIn(): boolean{
    return this.loginStatus;
  }
}

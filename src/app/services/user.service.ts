import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../env/environment';
import { Observable } from 'rxjs';
import { LoginRequest, SignupRequest } from '../models/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {

    // Define API
    apiURL = environment.apiUrl;

  constructor(private http: HttpClient) { }

  public test(): Observable<any>{
    return this.http.get(`${this.apiURL}/test/hello`);
  }

  public signup(data: SignupRequest): Observable<any>{
    return this.http.post(`${this.apiURL}/users/signup`, data);
  }

  public login(data: LoginRequest): Observable<any>{
    return this.http.post(`${this.apiURL}/users/signin`, data);
  }
    
}

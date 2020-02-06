import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private token: TokenService) {

  }


  login(data): Promise<Object> {
    return this.http.post(`api/Reviewers/login`, data).toPromise()
  }


  signup(data) {
    return this.http.post(`api/Reviewers`, data).toPromise()
  }
  logout(token) {
    this.authToken = token
    return this.http.post(`api/Reviewers/logout`, {}).toPromise()

  }
} 

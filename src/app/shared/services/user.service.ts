import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { TokenService } from './token.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl = 'http://localhost:3000/api';
  authToken = 'aML8SV82IBfaBS1CQabCzRtzbMyzOUsEL4nGomFBLz2ZdxZXtPuJQLXXXC31UhRz'
  constructor(private http: HttpClient, private token: TokenService) {

  }


  login(data): Promise<Object> {
    return this.http.post(`http://localhost:3000/api/Reviewers/login`, data).toPromise()
  }


  signup(data) {
    return this.http.post(`http://localhost:3000/api/Reviewers`, data).toPromise()
  }
  logout(token) {
    this.authToken = token
    return this.http.post(`http://localhost:3000/api/Reviewers/logout`, {}).toPromise()

  }
} 

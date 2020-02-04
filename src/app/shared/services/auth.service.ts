import { Injectable } from '@angular/core';
@Injectable()
export class AuthService {
    constructor() { }
    // ...
    public isAuthenticated(): boolean {
        const token = window.sessionStorage.getItem('auth_token');
        // Check whether the token is expired and return
        // true or false
        return token ? true : false;
    }
}
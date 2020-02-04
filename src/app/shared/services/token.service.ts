import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class TokenService {
    public isLoggedIn: Boolean = false;
    setToken(token) {
        return new Promise((resolve, reject) => {
            this.isLoggedIn = true;
            resolve(window.sessionStorage.setItem('auth_token', token))
        })

    }

    getToken(): Promise<string> {
        return new Promise((resolve, reject) => {
            if (window.sessionStorage.getItem('auth_token'))
                this.isLoggedIn = true;
            resolve(window.sessionStorage.getItem('auth_token'))

        })
    }

    isLoggedIns() {
        return new Promise((resolve, reject) => {
            if (window.sessionStorage.getItem('auth_token'))
                resolve(true)
            else
                reject(false)
        })
    }
    removeItem() {
        if (window.sessionStorage.getItem('auth_token')) {
            window.sessionStorage.removeItem('auth_token')
            this.isLoggedIn = false;
        }
    }
} 

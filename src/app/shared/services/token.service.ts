import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})
export class TokenService {
    public isLoggedIn: Boolean = false;
    userId:string=''
    setToken(token) {
        return new Promise((resolve, reject) => {
            this.isLoggedIn = true;
            this.userId =token['userId']
            window.sessionStorage.setItem('userId', token['userId'])
            resolve(window.sessionStorage.setItem('auth_token', token['id']))
        })

    }

    getToken(): Promise<string> {
        return new Promise((resolve, reject) => {
            if (window.sessionStorage.getItem('auth_token'))
                this.isLoggedIn = true;
                this.userId = window.sessionStorage.getItem('userId')
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
            window.sessionStorage.removeItem('userId')

            this.isLoggedIn = false;
        }
    }
} 

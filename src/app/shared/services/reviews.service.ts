import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
})

export class ReviewsService {

    //
    private baseUrl = 'http://localhost:3000/api';

    constructor(private http: HttpClient) { }

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': 'my-auth-token'
        })
    };

    // httpOptions.headers =        httpOptions.headers.set('Authorization', 'my-new-auth-token');

    private authToken = 'cdEeAxdUkjgaJNUEUH8XYYAu3cnxHyOXtr8UE4I8zAYoGPCo9mDrAsq2JFFrGr8W'
    getAllreviews() {
        return this.http.get(`http://localhost:3000/api/Reviews?${this.authToken}`).toPromise();
    }

    addReview(review){
        console.log(review)
        return this.http.post(`http://localhost:3000/api/Reviews?access_token=${this.authToken}`,review).toPromise();
    }

}

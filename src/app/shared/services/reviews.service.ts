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

    getAllreviews() {
        return this.http.get(`http://localhost:3000/api/Reviews`).toPromise();
    }

    addReview(review) {
        return this.http.post(`http://localhost:3000/api/Reviews`, review).toPromise();
    }

    getMyReviews(publisherId) {
        let query = { where : { 'publisherId': publisherId } }
        let filter = (JSON.stringify(query))
        let url = encodeURI(`http://localhost:3000/api/Reviews?filter=` + filter)
        return this.http.get(url).toPromise();
    }

}

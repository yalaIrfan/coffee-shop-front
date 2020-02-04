import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../shared/services/reviews.service';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.css']
})
export class AllReviewsComponent implements OnInit {


  constructor(private reviewService: ReviewsService) { }
  reviews: any[] = [];
  ngOnInit() {
    this.reviewService.getAllreviews().then((reviews: any[]) => {
      this.reviews = reviews;
    })
  }


}

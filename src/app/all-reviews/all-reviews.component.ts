import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../shared/services/reviews.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-reviews',
  templateUrl: './all-reviews.component.html',
  styleUrls: ['./all-reviews.component.css']
})
export class AllReviewsComponent implements OnInit {


  constructor(private reviewService: ReviewsService, private route: ActivatedRoute) { }
  reviews: any[] = [];
  myId: string = ''
  ngOnInit() {

    this.myId = this.route.snapshot.paramMap.get("id")
    if (!this.myId)
      this.reviewService.getAllreviews().then((reviews: any[]) => {
        this.reviews = reviews;
      })
    else
    this.reviewService.getMyReviews(this.myId).then((reviews: any[]) => {
      this.reviews = reviews;
    })

  }


}

import { Component, OnInit } from '@angular/core';
import { ReviewsService } from '../shared/services/reviews.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TokenService } from '../shared/services/token.service';

// import { Review} 
@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.css']
})
export class AddreviewComponent implements OnInit {
  rForm: FormGroup;

  constructor(private reviewService: ReviewsService,private fb: FormBuilder,private token:TokenService) { }
  reviews: any[] = [];
  ngOnInit() {
    this.rForm = this.fb.group({
      'name': [null, Validators.compose([
        Validators.required,
       
        Validators.maxLength(50)
      ])],
      'comments': [null, Validators.compose([
        Validators.required,
        Validators.minLength(5),
        Validators.maxLength(20)
      ])],
      'rating':[null,Validators.compose([
        Validators.required,
        Validators.max(5),
        Validators.min(1)

      ])]
    });
    this.token.getToken()
  }

  addReview(){
    console.log(this.rForm.value)
    console.log('user is '+window.sessionStorage.getItem('userId'))
    let rew ={

      "rating": this.rForm.get('rating').value,
      "comments": this.rForm.get('name').value,
      "coffeeShopId": 2,
      "publisherId": this.token.userId
     }

    this.reviewService.addReview(rew).then((review) => {
      this.rForm.reset()
    }).catch(err=>console.error(err))
  }
}

import { Component, OnInit} from '@angular/core';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-myreviews',
  templateUrl: './myreviews.component.html',
  styleUrls: ['./myreviews.component.scss','../../assets/css/animation-css.scss']
})
export class MyreviewsComponent implements OnInit {

  p: number = 1;
  myReviews = [];
  constructor(private reviewService : ReviewService) { }

  ngOnInit() {
    this.reviewService.getReviewByOwnerId(+localStorage.getItem('userId')).subscribe(data =>{
        this.myReviews = data;
        this.myReviews = this.myReviews.reverse();
    })
  }
 
  

}

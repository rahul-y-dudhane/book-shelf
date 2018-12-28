import { Component, OnInit } from '@angular/core';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  p: number = 1;
  myReviews = [];
  constructor(private reviewService : ReviewService) { }

  ngOnInit() {
    this.reviewService. getAllReview().subscribe(data =>{
        this.myReviews = data;
        this.myReviews = this.myReviews.reverse();
    })
  }

}

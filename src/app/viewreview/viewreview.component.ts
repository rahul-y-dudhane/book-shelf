import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-viewreview',
  templateUrl: './viewreview.component.html',
  styleUrls: ['./viewreview.component.scss']
})
export class ViewreviewComponent implements OnInit {

  id : number
  review = [];
  userName : string;
  constructor(private route : ActivatedRoute , private reviewService : ReviewService) { }

  ngOnInit() {
   this.userName =  localStorage.getItem("userName");
    this.route.params.subscribe((params : Params) => {
        this.reviewService.getReviewById(+params['id']).subscribe(data => {
          this.review = data;
        })
    })
  }

}

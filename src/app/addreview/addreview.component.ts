import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookReview } from '../model/bookReview';
import { ReviewService } from '../services/review.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.scss']
})
export class AddreviewComponent implements OnInit {

  btnText = "Add review";

  constructor(private reviewService : ReviewService , private router: Router) { }

  ngOnInit() {
  }

  addReview(review : BookReview){
       review.rating = +review.rating;
    review = Object.assign({ownerId : +localStorage.getItem('userId')},review);

      console.log(review);

    

     this.reviewService.addReview(review).subscribe(data =>{
       this.router.navigate(['/myreviews']);
     })
  }
}

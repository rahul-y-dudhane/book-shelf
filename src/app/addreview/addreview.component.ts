import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { BookReview } from '../model/bookReview';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.component.html',
  styleUrls: ['./addreview.component.scss']
})
export class AddreviewComponent implements OnInit {

  btnText = "Add review";

  constructor(private reviewService : ReviewService) { }

  ngOnInit() {
  }

  addReview(reviewForm : NgForm){
      console.log(reviewForm);

    // review ={
    //   name : reviewForm.value.bookName,
    //   author : reviewForm.value.bookAuthor,
    //   rating : reviewForm.value.rating,
    //   ownerId : +localStorage.getItem('userId'),
    //   price: reviewForm.value.price,
    //   pages: reviewForm.value.pages,
    //   review: reviewForm.value.review
    // }
    // reviewForm. +localStorage.getItem('userId');
    

    //  this.reviewService.addReview(reviewForm).subscribe(data =>{
    //     reviewForm.reset();
    //  })
  }
}

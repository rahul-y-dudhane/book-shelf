import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReviewService } from '../services/review.service';

@Component({
  selector: 'app-viewreview',
  templateUrl: './viewreview.component.html',
  styleUrls: ['./viewreview.component.scss','../../assets/css/animation-css.scss']
})
export class ViewreviewComponent implements OnInit {

  id : number
  review = [];
  userName : string;
  constructor(private route : ActivatedRoute , private reviewService : ReviewService, private router: Router) { }

  ngOnInit() {
   this.userName =  localStorage.getItem("userName");
    this.route.params.subscribe((params : Params) => {
        this.reviewService.getReviewById(+params['id']).subscribe(data => {
          this.review = data;
        })

    })
  }
  deleteReview(id: number){

    this.reviewService.deleteReviewById(id).subscribe(data => {

      console.log(data + " deleted successfully");
      this.router.navigate(['/myreviews']);
    },
    error => {
      console.log(error);
    })


  }
  editReview(review : any[]){
    this.router.navigate(['/review',review]);
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ReviewService } from '../services/review.service';
import { AdminSevice } from '../services/admin.service';
import { BookReview } from '../model/bookReview';

@Component({
  selector: 'app-viewreview',
  templateUrl: './viewreview.component.html',
  styleUrls: ['./viewreview.component.scss','../../assets/css/animation-css.scss']
})
export class ViewreviewComponent implements OnInit {

  id : number
  review: BookReview;
  userName : string;
  hideBtn : boolean = true;
  constructor(private route : ActivatedRoute , private reviewService : ReviewService, 
              private router: Router , private adminService : AdminSevice) { }

  ngOnInit() {
    console.log(this.route);
   
    
  //  this.userName =  localStorage.getItem("userName");
    this.route.params.subscribe((params : Params) => {
        this.reviewService.getReviewById(+params['id']).subscribe(data => {
          this.review = data;
          this.adminService.getAdminById(this.review.ownerId).subscribe(data => {
            this.userName = data.firstName+" "+data.lastName;
            if(this.route.snapshot.routeConfig.path === "allreviews/:id"){
              this.hideBtn = true;
             
            }else{
              this.hideBtn = false;
            }
          })
         
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

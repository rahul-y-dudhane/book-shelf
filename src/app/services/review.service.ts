import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookReview } from '../model/bookReview';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class ReviewService {
 
  reviewUrl = "http://localhost:3000/reviews";
  
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };

  constructor(private http : HttpClient) { }


  addReview(review : BookReview): Observable<any>{
    

    return this.http.post(this.reviewUrl,review,this.httpOptions);
  }

  getReviewByOwnerId(ownerId : number): Observable<any>{

    return this.http.get(`${this.reviewUrl}?ownerId=${ownerId}`).pipe(response => response);
  }
   getReviewById(id : number): Observable<any> {
     return this.http.get(`${this.reviewUrl}/${id}`).pipe(response =>response);
   }

   deleteReviewById(id: number): Observable<any>{

    return this.http.delete(`${this.reviewUrl}/${id}`).pipe(res => res);
   }

   updateReviewById(id : number, review: BookReview): Observable<any>{
     return this.http.put(`${this.reviewUrl}/${id}`,review,this.httpOptions);
   }

}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookReview } from '../model/bookReview';
import { HttpHeaders, HttpClient } from '@angular/common/http';

@Injectable()
export class ReviewService {
 
  reviewUrl = "http://localhost:3000/reviews";
  
  

  constructor(private http : HttpClient) { }


  addReview(review : BookReview): Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };

    return this.http.post(this.reviewUrl,review,httpOptions);
  }
}

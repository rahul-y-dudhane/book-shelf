import {Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { User } from '../model/user';

@Injectable()
export class AdminSevice{

    adminUrl = "http://localhost:3000/admins";

    isLoggedIn = new BehaviorSubject(false);

    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json'
        })
      };

    constructor(private http : HttpClient){

    }

    getAllAdmins() : Observable<any> {
        return this.http.get(this.adminUrl).pipe(res => res);
}

    authenticate(email : string , password : string) : Observable<any>{

        // return this.http.get(this.adminUrl+"?email="+email+"&passw/ord="+password).pipe(map((res : Response) => res));
        return this.http.get(`${this.adminUrl}?email=${email}&password=${password}`)
                    .pipe(response => response);


    }
    addUser(user: User): Observable<any>{
        return this.http.post(this.adminUrl , user, this.httpOptions);
    }

    updateUserById(id: number, updatedUser: User): Observable<any>{
        return this.http.put(`${this.adminUrl}/${id}`,updatedUser,this.httpOptions);
    }

    deleteUserById(id: number):Observable<any>{
        return this.http.delete(`${this.adminUrl}/${id}`);
    }



}
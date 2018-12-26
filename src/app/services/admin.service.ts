import {Injectable} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable()
export class AdminSevice{

    adminUrl = "http://localhost:3000/admins";

    isLoggedIn = new BehaviorSubject(false);


    constructor(private http : HttpClient){

    }

    getAllAdmins() : Observable<any> {
        return this.http.get(this.adminUrl).pipe(map((res : Response) => res));
}

    authenticate(email : string , password : string) : Observable<any>{

        // return this.http.get(this.adminUrl+"?email="+email+"&passw/ord="+password).pipe(map((res : Response) => res));
        return this.http.get(`${this.adminUrl}?email=${email}&password=${password}`)
                    .pipe(response => response);


    }

}
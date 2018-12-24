import { Component, OnInit, Output } from '@angular/core';
import {FormControl, FormGroup, Validators, NgForm} from '@angular/forms'
import { AdminSevice } from '../services/admin.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  email ='';
  password ='';
  isError = false;

  constructor(private adminService : AdminSevice) { }

  ngOnInit() {
    
  }
login(form : NgForm){
    
  this.adminService.authenticate(form.value.email , form.value.password).subscribe(data => {

    if(data == 0){
      this.adminService.adminExist.next(false);
      this.isError = true;

    }else{
      this.adminService.adminExist.next(true);
      window.localStorage.setItem('isLoggedIn', 'true');
    }


      // !data ? this.adminService.adminExist.next(false) : this.adminService.adminExist.next(true);
     
  })


}
}

import { Component, OnInit, Output } from '@angular/core';
import {FormControl, FormGroup, Validators, NgForm} from '@angular/forms'
import { AdminSevice } from '../services/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {



  email ='';
  password ='';
  isError = false;

  constructor(private adminService : AdminSevice, private router : Router) { }

  ngOnInit() {
    
  }
login(form : NgForm){
    
  this.adminService.authenticate(form.value.email , form.value.password).subscribe(data => {

    if(data == 0){
      this.adminService.isLoggedIn.next(false);
      this.isError = true;

    }else{
      this.adminService.isLoggedIn.next(true);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('userId',data[0].id);
      this.router.navigate(['/review']);//change after home component get ready

    }


      // !data ? this.adminService.adminExist.next(false) : this.adminService.adminExist.next(true);
     
  })


}
}

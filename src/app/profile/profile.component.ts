import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminSevice } from '../services/admin.service';
import { myProfile} from '../model/myProfile';

import { FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  readonly = true;
  profile = [];
  userId :number;
  myForm;

  constructor(private formBuilder:FormBuilder,private activatedroute:ActivatedRoute,private myservice:AdminSevice) { }
  
  ngOnInit() {
           this.userId = +localStorage.getItem('userId');
           this.myservice.getAdminById(this.userId).subscribe(data =>{
           this.profile = data;
  })
 
  this.myForm = this.formBuilder.group({
    firstName : ['' , Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
  })
}

updateProfile(myProfile:myProfile)
{
  this.myservice.updateProfileById(this.userId,myProfile).subscribe(data =>{

    this.myservice.getAdminById(this.userId).subscribe(data =>{
      this.profile = data;
      this.readonly = true;
  })
  })
}

editable()
{
  this.readonly=false;
}
  }



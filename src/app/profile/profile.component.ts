import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AdminSevice } from '../services/admin.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private activatedroute:ActivatedRoute,private myservice:AdminSevice) { }
  
  profile = [];
  userId :number;
  ngOnInit() {

    this.myservice.getAdminById(+localStorage.getItem('userId')).subscribe(data =>{
      this.profile = data;
      this.profile = this.profile.reverse();
  })
}

  }



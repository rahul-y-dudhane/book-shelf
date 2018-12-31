import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { LoginComponent } from '../login/login.component';
import { AdminSevice } from '../services/admin.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {


  
  sideBarWidth = 250;
  mainMargin = 250;

  sideBar = true;

  constructor(private adminService : AdminSevice , private authService : AuthService,private router : Router) { }

  ngOnInit() {
      // this.adminService.adminExist.subscribe(data =>{
      //   this.userExist = data;
      // })

  }

 


  toggleSideBar(){
    if(this.sideBar){
      this.sideBarWidth = 0;
      this.mainMargin = 0;
      this.sideBar = false;
    }else{
      this.sideBarWidth = 250;
      this.mainMargin = 250;
      this.sideBar = true;
    }
    
  }

  logout(){
    this.adminService.isLoggedIn.next(false);
    localStorage.clear();
    this.router.navigate(['/logout']);
  }

}

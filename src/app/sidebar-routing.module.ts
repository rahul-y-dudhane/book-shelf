import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
      path : 'sidenav' , 
      component: SidenavComponent,
    children:[
        {
            path:'home',
            component:SidenavComponent
        },
        {
            path:'login',
            component:LoginComponent
            
        }
              
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideBarRoutingModule { }

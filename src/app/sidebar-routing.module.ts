import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth/auth.guard';
import { AddreviewComponent } from './addreview/addreview.component';
import { MyreviewsComponent } from './myreviews/myreviews.component';

const routes: Routes = [
  {
      path : '' , 
      component: SidenavComponent,
    
      children:[
        {
            path:'review',
            component:AddreviewComponent,
            canActivate: [AuthGuard],     
        },
        {
            path:'login',
            component:LoginComponent

            
        },
        {
            path:'myreviews',
            component:MyreviewsComponent,
            canActivate: [AuthGuard],     
        },
        {
            path:'',
            redirectTo:'login',
            pathMatch:'full'
        }
              
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SideBarRoutingModule { }

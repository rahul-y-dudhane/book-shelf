import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent } from './sidenav/sidenav.component';


const routes: Routes = [
  {
    path : 'sidenav' ,
     component: SidenavComponent
    },
  {
    path:'',
    redirectTo :'sidenav',
    pathMatch:'full'
  },
  {
    path:'**',
    redirectTo :'sidenav'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

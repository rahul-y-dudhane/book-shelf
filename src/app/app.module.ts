import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './login/login.component';
import { SideBarRoutingModule } from './sidebar-routing.module';
import { AddreviewComponent } from './addreview/addreview.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminSevice } from './services/admin.service';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    LoginComponent,
    AddreviewComponent
  ],
  imports: [
    BrowserModule,
    SideBarRoutingModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [AdminSevice],
  bootstrap: [AppComponent]
})
export class AppModule { }

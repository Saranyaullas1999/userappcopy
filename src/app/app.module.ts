import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule,Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiginComponent } from './sigin/sigin.component';
import { SignupComponent } from './signup/signup.component';


const appRoutes:Routes=[
  {
    path:"",component:SiginComponent
  },
  {
    path:"signup",component:SignupComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    SiginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

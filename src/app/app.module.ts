import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';

import { HomeModule } from './home/home.module';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login';
import { AddRoleComponent } from './super_admin/addRole/addRole.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    AddRoleComponent

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

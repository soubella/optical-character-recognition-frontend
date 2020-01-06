import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register';
import { LoginComponent } from './login';
import { AddRoleComponent } from './super_admin/addRole/addRole.component';

const routes: Routes =[

  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'addRole', component: AddRoleComponent },
  { path: '', component: LoginComponent }
    ]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

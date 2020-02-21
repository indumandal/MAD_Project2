import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginpageComponent} from './loginpage/loginpage.component';
import { DashboardpageComponent} from './dashboardpage/dashboardpage.component';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {EditComponent} from './edit/edit.component';
//import {registerComponent} from './register/register.component';
import {RegisterComponent} from './register/register.component';
import { from } from 'rxjs';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:'',component:LoginpageComponent},
  {path:'loginpage',canActivate:[AuthGuard], component:LoginpageComponent},
  {path:'register',canActivate:[AuthGuard], component:RegisterComponent},
  {path:'dashboardpage',canActivate:[AuthGuard], component:DashboardpageComponent, children:[
  //  {path:'',canActivate:[AuthGuard], component:HomeComponent},
    {path:'home',canActivate:[AuthGuard], component:HomeComponent},
    {path:'about',canActivate:[AuthGuard], component:AboutComponent},
    {path:'edit',canActivate:[AuthGuard], component:EditComponent}
  ]},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

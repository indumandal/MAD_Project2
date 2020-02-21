import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule} from '@angular/forms';
import {CompServiceService} from './comp-service.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { DashboardpageComponent } from './dashboardpage/dashboardpage.component';
import { from } from 'rxjs';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuard } from './auth.guard';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule,HTTP_INTERCEPTORS} from '@angular/common/http';
//import {HTTP_INTERCEPTORS} from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
//import { ReqhttpComponent } from './reqhttp/reqhttp.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginpageComponent,
    DashboardpageComponent,
    DashboardComponent,
    HomeComponent,
    AboutComponent,
    RegisterComponent,
    EditComponent,
   // ReqhttpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
   // {provide: HTTP_INTERCEPTORS, useClass:ReqhttpComponent , multi: true},
    CompServiceService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

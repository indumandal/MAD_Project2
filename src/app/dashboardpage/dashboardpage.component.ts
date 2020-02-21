import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CompServiceService} from './../comp-service.service';
//import { TimeInterval } from 'rxjs';
@Component({
  selector: 'app-dashboardpage',
  templateUrl: './dashboardpage.component.html',
  styleUrls: ['./dashboardpage.component.css'],
  providers:[CompServiceService]
})
export class DashboardpageComponent implements OnInit {
 user: any;
  constructor(private router:Router,private service:CompServiceService) { }

  ngOnInit() {
    console.log(localStorage.getItem('user'))
    this.user = localStorage.getItem('user');
   // user
    //=this.service.Currentuser.name;
  }
  logout() {
    //this.authenticationService.logout();
    console.log("logout")
    this.router.navigate(['/loginpage']);
}

}


//reqres.in

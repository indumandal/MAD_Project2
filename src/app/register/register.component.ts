import { Component, OnInit } from '@angular/core';
import { CompServiceService } from './../comp-service.service'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user1 = { Fname: "", lname: "", Address: "", Number: "",uname:"",pwd:"" };
  // userlist: any =[];
  msg1;

  constructor(private service: CompServiceService, private routes: Router, private http: HttpClient) { }

  ngOnInit() {
    console.log(this.service.userlist)
  }

  onSubmit1(form) {
     debugger
    // this.userlist = JSON.parse(localStorage.getItem('list'));
   this.service.userlist.push(this.user1);
   console.log(this.service.userlist)
   localStorage.setItem("employees", JSON.stringify(this.service.userlist));
   var storedNames = JSON.parse(localStorage.getItem("employees"));
   
    //  localStorage.setItem('list',this.userlist);

    // this.user1=form;
    // this.userlist.push(this.user1);
    // console.log(this.user1.uname);

    localStorage.setItem('registereduser',JSON.stringify(this.user1));


    // return this.http.post<any>('https://reqres.in/api/register', this.user1).subscribe(res => {
    //   console.log(res);
    //   console.log(res.data);
    // }, error => {
    //   console.log(error)
    // }

    // );

    if (form.valid) {
      this.routes.navigate(['/loginpage']);
      console.log(this.user1.uname);
      
      console.log("form is valid")
    } else {
      this.routes.navigate(['/register']);
    }
  }

}

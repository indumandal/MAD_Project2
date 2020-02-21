import { Component, OnInit } from '@angular/core';
import {CompServiceService} from './../comp-service.service'
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import { from } from 'rxjs';
@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css'],
  providers:[CompServiceService]
})
export class LoginpageComponent implements OnInit {
  list: any = [];
  user = {name:"",pwd:""};
  	msg;
u:string;

  constructor(private service:CompServiceService,private routes:Router,private http:HttpClient) { }

  ngOnInit() {
    console.log(this.service.userlist)
    const page=2;
  this.getuser(page).subscribe(Response=>{
    console.log("user inserted",Response);
  })
  }

  getuser(page)
  {
return this.http.get<any>('https://reqres.in/api/users?page='+page);
  }
  onSubmit(form){
    if(form.valid){
      
     let u=this.user.name;
     let p=this.user.pwd;
    // this.check(u,p);
      var output=this.service.checkcrendentials(u,p);
      if(output==true)
      {
        this.routes.navigate(['/dashboardpage/home']);
      }
      else
      {
        this.msg='Invalid username or password...!'
      }
      console.log(output);
      console.log(this.user.name);

      //this.userlist = JSON.parse(localStorage.getItem('list'));

      console.log("form is valid")
    } else {
      console.log(form.controls.name.errors)
    }
  }

  check(u:string,p:string)
  {
    debugger;
    console.log(this.service.userlist);
    this.list= this.service.userlist.filter(t=>t.uname== u && t.pwd==p);
    console.log(this.list);
    for (var i=0; i < this.list.length; i++){
      if ( this.list[i].uname == u ){
        console.log("check");
        return true
      }
      else
{
  return false
}
    } 
  }

}

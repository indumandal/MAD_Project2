import { Router } from '@angular/router';
import { CompServiceService } from './../comp-service.service';
import { Component, OnInit, ViewChild ,ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import *  as jspdf from 'jspdf';
import { splitClasses } from '@angular/compiler';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [CompServiceService]
})
export class HomeComponent implements OnInit {
  @ViewChild('çontent',{static:false}) content:ElementRef;
  //user:any;
  eror:any;
  employee:any;
  users: any;
  user = [{ "id": "", "email": "", "first_name": "", "last_name": "", "avatar": "" }];


  constructor(private router: Router, private service: CompServiceService, private http: HttpClient) { }

  ngOnInit() {
    //this.users = [];
    this.getUsers();
    //console.log(localStorage.getItem('user'))
    //this.user = localStorage.getItem('user');
  }

  public downloadPDF()
  {
    debugger;
let doc=new jspdf('landscape');
let specialElementHandlers={

}
let content=this.content.nativeElement;
doc.fromHTML(content.innerHTML,15,15,{
  'elementHandlers':specialElementHandlers
});
doc.save('test.pdf')
  }

  public getUsers() {
    debugger
  //  var storedNames = JSON.parse(localStorage.getItem("employees"));
    return this.http.get<any>('https://reqres.in/api/users?page=2').subscribe(res => {
      console.log(res);
      this.users = res.data;
      if(this.users.length>0)
    {
      this.users=[];

     console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh") 
    this.users=JSON.parse(localStorage.getItem("employees"));
    }
    },
    error => this.eror.push(error) 
    );
    
  }

Delete(e)
{
  //debugger
  var a=JSON.parse(localStorage.getItem("employees"));
  var newlist=a.filter(x=>{
    return x.uname!=e.uname
  })
  localStorage.removeItem("employees");
  localStorage.setItem("employees", JSON.stringify(newlist));
  this.getUsers();
console.log(e);
}

Edit(e)
{
  localStorage.setItem("edituser", JSON.stringify(e));
  // var abc=JSON.parse(localStorage.getItem("employees"));
  // var newlist=abc.filter(x=>{
  //   return x.uname!=e.uname
  // })
  // localStorage.removeItem("employees");
  // newlist.push(e);
  // localStorage.setItem("employees", JSON.stringify(newlist));
  // this.getUsers();
  this.router.navigate(['/dashboardpage/edit']);

}
}

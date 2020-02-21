import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  user1 = { Fname: "", lname: "", Address: "", Number: "",uname:"",pwd:"" };
  // userlist: any =[];
  msg1;
  constructor( private routes: Router) { }

  ngOnInit() 
  {
    var a=JSON.parse(localStorage.getItem("edituser"));
    this.user1=a;
  }

  editSubmit(form)
  {
    if (form.valid) {
      var abc=JSON.parse(localStorage.getItem("employees"));
  var newlist=abc.filter(x=>{
    return x.uname!=this.user1.uname;
  })
  localStorage.removeItem("employees");
  newlist.push(this.user1);
  localStorage.setItem("employees", JSON.stringify(newlist));
      this.routes.navigate(['/dashboardpage/home']);
    
    } else {
      this.routes.navigate(['/dashboardpage/edit']);
    }
  }

}

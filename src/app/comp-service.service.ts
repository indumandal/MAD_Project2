import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root'
})
export class CompServiceService {
  result:any=[];
  userlist: any = [];
  registereduser = { Fname: "", lname: "", Address: "", Number: "",uname:"",pwd:"" };
 Currentuser = {name:"",pwd:""}
 //Currentuser = {name:"admin",pwd:"123456"}

 constructor() { }
  checkcrendentials(u:string,p:string)
  {
    debugger

    var existrecord=this.checkrecord(u,p);
    
//     this.registereduser = JSON.parse(localStorage.getItem('registereduser'));
//     if(this.registereduser.uname==u)
//     {
//       debugger
// console.log(this.userlist);
// console.log(this.registereduser.uname);
// this.Currentuser.name=this.registereduser.uname;
//   localStorage.setItem('user',this.registereduser.uname);
// return true;
//     }
//     else
//     {
//       return false;
//     }

//========new code  =====
if(existrecord==true)
{
  localStorage.setItem('user',u);
  return true;
}
else
{
return false;
}
  }

  checkrecord(u:string,p:string)
  {
    debugger
    var storedNames = JSON.parse(localStorage.getItem("employees"));
    
    for (var i=0; i < storedNames.length; i++){
      if ( storedNames[i].uname == u && storedNames[i].pwd == p){
        console.log("check");
        return true
      }
     
    }
 
  }
  getuser1()
  {
    return this.Currentuser.name;
    console.log(this.Currentuser.name);
  }
  
}

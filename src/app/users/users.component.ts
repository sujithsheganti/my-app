import { Component } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  public users:any=[]
  public term:any=""
  public column :any=""
  public order:any=""

   
  constructor(private _usersServices:UsersService){
    _usersServices.getUsers().subscribe(
      (data:any)=>{
        this.users=data;

      },
      (err:any)=>{
        alert("Internal server error")
      }

    )


  }
   getfilteredusers(){
    this._usersServices.getfilteredusers(this.term).subscribe(
      (data:any)=>{
        this.users=data;

      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
   }
   getsortedusers(){
   this._usersServices.getsortedusers(this.column,this.order).subscribe(
    (data:any)=>{
      this.users=data;
    },
    (err:any)=>{
    alert("Internal server error")
    
    }   
   )
   }
   deleteusers(id:any){
    this._usersServices.deleteusers(id).subscribe(
      (data:any)=>{
        alert("deleted sucessfully");
        location.reload();
      },
      (err:any)=>{
        alert("inernal server error");
      }
    )
   }
   public limit: any;
   public page:any;
   getpageusers(){
    this._usersServices.getpagedusers(this.limit,this.page).subscribe(
      (data:any)=>{
        this.users=data
      },
      (err:any)=>{
      alert("internal server error")
      }
    )
   }
  
   }
  









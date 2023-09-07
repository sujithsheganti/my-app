import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
   public accouts :  any=[];

   constructor(private _accountsServices:AccountsService){
    _accountsServices.getaccounts().subscribe(
        (data:any)=>{
          this.accouts = data;

        },
        (err:any)=>{
          alert("Internal server error")
        }

    )
   }



  }

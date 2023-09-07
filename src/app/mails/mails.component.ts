import { Component } from '@angular/core';
import { MailsService } from '../mails.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-mails',
  templateUrl: './mails.component.html',
  styleUrls: ['./mails.component.css']
})

export class MailsComponent {
  public mails:any=[]

  constructor(private _mailsservice:MailsService){
      _mailsservice.getmails().subscribe(
        (data:any)=>{
          this.mails=data;

        },
        (err:any)=>{
          alert("internal server error")
        }


      )

  }

}

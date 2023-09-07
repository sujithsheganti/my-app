import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { FlipkartService } from '../flipkart.service';

@Component({
  selector: 'app-filpkart',
  templateUrl: './filpkart.component.html',
  styleUrls: ['./filpkart.component.css']
})
export class FilpkartComponent {
 public flipkarts: any=[]
 constructor(private _flipkartServices:FlipkartService){
  _flipkartServices.getflipkart().subscribe(
    (data:any)=>{
      this.flipkarts =data;



    },
     (err:any)=>{
      alert("Internal server error")
     }
    )


 }
}

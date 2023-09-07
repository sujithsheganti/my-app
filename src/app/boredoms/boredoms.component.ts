import { Component } from '@angular/core';
import { BoredomsService } from '../boredoms.service';

@Component({
  selector: 'app-boredoms',
  templateUrl: './boredoms.component.html',
  styleUrls: ['./boredoms.component.css']
})
export class BoredomsComponent {
  public boredoms:any=[]
   constructor(private _boredomsServices:BoredomsService){
  _boredomsServices.getboredoms().subscribe(
    (data:any)=>{
      this.boredoms=data;

    },
    (err:any)=>{
    alert("Internal server error")
    }
    )

   }
   reload(){
    this._boredomsServices.getboredoms().subscribe(
      (data:any)=>{
        this.boredoms=data;

      },
      (err:any)=>{
      alert("internal server error")
      }
    )
   }

}

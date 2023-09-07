import { Component } from '@angular/core';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicles',
  templateUrl: './vehicles.component.html',
  styleUrls: ['./vehicles.component.css']
})


export class VehiclesComponent {
  public vehicles: any = [];
  public term:string = "";
  public column:string="";
  public order:string="";
  public limit:string="";
  public page:string=""

  constructor(private _vehiclesServices:VehiclesService) {
    
    _vehiclesServices.getVehicles().subscribe(
      (data:any) => {
        this.vehicles = data;
      },
      (err:any) => {
        alert("Internal sever error")
      }
    )
  }
 getfilteredVehicles(){
  this._vehiclesServices.getfilteredVehicles(this.term).subscribe(
    (data:any)=>{
      this.vehicles=data;
    },
    (err:any)=>{
    alert("Internal server error")
    }
    )
 }
   getSortedVehicles(){
    this._vehiclesServices.getSortedVehicles(this.column,this.order).subscribe(
      (data:any)=>{
      this.vehicles=data;
      },
    (err:any)=>{
      alert("Internal server error")
    }
    )
  
   }

   getpagedVehicle(){
    this._vehiclesServices.getpagedVehicle(this.limit,this.page).subscribe(
        (data:any)=>{
          this.vehicles=data
        },
        (err:any)=>{
          alert("internal server error")
        }
    )    
   }
  
   deleteVehicle(id:any){
    this._vehiclesServices.deleteVehicle(id).subscribe(
      (data:any)=>{
        alert("deleted successfully")
        location.reload()
      },
        (err:any)=>{
          alert("Internal server error")
        }
    )

   }
   
}
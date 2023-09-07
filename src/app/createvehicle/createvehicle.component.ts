import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {



  public vehicleform:FormGroup=new FormGroup({
    vehicle: new FormControl(),
    Manufacturer: new FormControl(),
    Model: new FormControl(),
    type: new FormControl(),
     Fuel: new FormControl(),
     color: new FormControl(),
     image:new FormControl(),
     id: new FormControl()
  
  })

  constructor(private _vehiclesService:VehiclesService){}

   submit(){
    console.log(this.vehicleform);

    this._vehiclesService.createvehicle(this.vehicleform.value).subscribe(
      (data:any)=>{
        alert("vehicle created successfully");
      },
      (err:any)=>{
      alert("vehicle creation failed")
      }
    )
   }

}

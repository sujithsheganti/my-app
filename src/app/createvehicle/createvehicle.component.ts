import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { VehiclesService } from '../vehicles.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-createvehicle',
  templateUrl: './createvehicle.component.html',
  styleUrls: ['./createvehicle.component.css']
})
export class CreatevehicleComponent {
  public id: any = "";


  public vehicleform: FormGroup = new FormGroup({
    Vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    id: new FormControl()

  })

  constructor(private _vehiclesService: VehiclesService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(
      (data: any) => {
        this.id = data.id;

        this._vehiclesService.getVehicleDetails(this.id).subscribe(
          (data: any) => {
            this.vehicleform.patchValue(data);
          }

        )
      }
    )
  }
  

  submit(){
    console.log(this.vehicleform)
    if (this.id) {
      console.log(this.vehicleform);
      // edit
      this._vehiclesService.update(this.id,this.vehicleform.value).subscribe(
        (data: any) => {
          alert("vehicle update successfully");
        },
        (err: any) => {
          alert("vehicle update failed")
        }
      )
    }

    else {
      this._vehiclesService.createvehicle(this.vehicleform.value).subscribe(
        (data: any) => {
          alert("vehicle created successfully");
        },
        (err: any) => {
          alert("vehicle creation failed")
        }
      )
    }
  }






}
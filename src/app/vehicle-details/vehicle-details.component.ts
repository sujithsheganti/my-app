import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { VehiclesService } from '../vehicles.service';

@Component({
  selector: 'app-vehicle-details',
  templateUrl: './vehicle-details.component.html',
  styleUrls: ['./vehicle-details.component.css']
})
export class VehicleDetailsComponent {
  public id:any=[]
  public vehicle:any=[]
 constructor(private activatedRoute:ActivatedRoute, private vehicleService:VehiclesService){

  activatedRoute.params.subscribe(
    (data:any)=>{
      this.id=data.id;

      vehicleService.getVehicleDetails(this.id).subscribe(
        (data:any)=>{
        this.vehicle=data;
        }
    
        )
    
    }
  
      )
    }
  
 }


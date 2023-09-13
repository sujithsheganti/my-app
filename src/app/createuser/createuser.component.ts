import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { min } from 'rxjs';

@Component({
  selector: 'app-createuser',
  templateUrl: './createuser.component.html',
  styleUrls: ['./createuser.component.css']
})
export class CreateuserComponent {

public userform:FormGroup=new FormGroup({
  name: new FormControl("",[Validators.required, Validators.minLength(3)]),
  phone:new FormControl("",[Validators.required,Validators.max(1000000000),Validators.min(9999999999)]),
  city: new FormControl(),
  fee : new FormControl(),
  id:new FormControl(),
  address: new FormGroup({
    hno: new FormControl(),
    state:new FormControl(),
    pin: new FormControl()
  
  }),
  // dynamic forms
  type:new FormControl(),
  busfee:new FormControl(),
  hostelfee: new FormControl(),
   cards: new FormArray([])

});
 get cardsFormArray(){
  return this.userform.get('cards') as FormArray;

 }
 addCard(){
  this.cardsFormArray.push(
    new FormGroup({
      no: new FormControl(),
      exp: new FormControl(),
      cvv: new FormControl("",[Validators.required,Validators.min(100),Validators.max(999)])
    })
  )
 }
 deleteCard(i:number){
  this.cardsFormArray.removeAt(i)

 }


constructor(private _userService:UsersService){}
 submit(){
  console.log(this.userform)
  this._userService.createuser(this.userform.value).subscribe(
    (data:any)=>{
      alert("user created successfully");
    },
    (err:any)=>{
      alert("user created failed")
    }
  )
 }

}



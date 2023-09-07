import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public name: String="abc";
  public age: number = 20;
  public isIndian:boolean=true;

  public phone:string="+91";



}

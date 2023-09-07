import { Component } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent {
  public num:any = 0;

Random(){
this.num = Math.floor(Math.random()*6+1);
return this.num;

}
}

import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
    @Input() public ac:number=0;
    @Input() public rate:any=0;
    
    
    public bc:number=0
    @Output() public bEvent:EventEmitter<any>=new EventEmitter();
   
    send(){
      this.bEvent.emit(this.bc);
    }

    @Input() public num1:number=0;
    @Input() public num2:number=0;

    @Input() public rates:any=0


    @Output() public cal :EventEmitter<any>= new EventEmitter();
    // @Output() public child :EventEmitter<any>= new EventEmitter();
    send1(){
       this.rates.emit(this.num1)

    }
    sum(){
      this.cal.emit(this.num1+this.num2)
    }
    mul(){
      this.cal.emit(this.num1*this.num2)
    }

  }

import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  public ap:number=0
  public bp:number=0
  public rating:number=0
  



  
   catch(value:any){
    this.result=value;
  }


  

  public parent:any=0;
  public children:any=0;
  public result:number=0; 



  

}

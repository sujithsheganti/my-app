import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {
  public time:number=0;
    
  public ages:number[]=[10,20,30,40,50,60]
    public states:string[]=['Telangana','andhrapradesh','karnataka','tamilnadu']
    

    
  
    public users:any=[
    {name:'abc1',age:20,marks:23,phone:8897184767},
    {name:'abc2',age:30, marks:80,phone:9492519318},
    {name:'abc3',age:40,marks:32,phone:9182448206},  
    {name:'abc4',age:50,marks:60,phone:9440626218},
  ]   
     public term:string="";
     filter(){
      this.users=this.users.filter((value:any)=>value.name.includes(this.term))
     }
     ageHighToLow(){
      this.users=this.users.sort((a:any,b:any)=>b.age-a.age);


     }

     delete(i:any){
      this.users.splice(i,1);
     }
  
     increaseByone(){
       this.users=this.users.map((value:any)=>{
        value.age=value.age+1;
        return value;

       });


     }
  
     total(){
      let total=this.users.reduce((sum:any,a:any)=>sum+a.age,0);
      alert(total);

     }
    
    }
  


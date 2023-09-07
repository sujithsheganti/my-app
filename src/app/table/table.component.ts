import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {
  public products:any=[
     
    {productname:'pen',price:10,rating:3,freedelivery:true},
    {productname:'phone',price:1300,rating:2,freedelivery:false},
    {productname:'shirt',price:400,rating:4,freedelivery:true},
    {productname:'cap',price:200,rating:5,freedelivery:false},
    {productname:'mobilecase',price:300,rating:2,freedelivery:true},
    {productname:'remote',price:400,rating:2.5,freedelivery:false}
  
  ]
  public term:string="";
  filter(){
    this.products=this.products.filter((product:any)=>product.productname.includes(this.term))
  }
  onlyfreed(){
    this.products=this.products.filter((product:any)=>product.freedelivery==true)
    }
    pricelowtoheigh(){
      this.products=this.products.sort((a:any,b:any)=>a.price-b.price)
    }
   priceheightolow(){
    this.products=this.products.sort((a:any,b:any)=>b.price-a.price)
   }
   discount(){
    this.products= this.products.map((product:any)=>{
      product.price=product.price*0.5;
      return this.products;
      });
    }
    delivery(){
      this.products=this.products.map((product:any)=>{
        product.price=product.price+30
         return product
      });
      
    }
     total(){
      let total=this.products.reduce((sum:any,a:any)=>sum+a.price,0)
     alert(total)
    
    }
    cartitems(){
     let total=this.products.length;
     alert(total)


    }
  
  
  }
  


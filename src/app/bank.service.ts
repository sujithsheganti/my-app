import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BankService {
  public balance:number=100000
  ;
  constructor() { }
  
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public login:FormGroup=new FormGroup({
    email:new FormControl(),
    password:new FormControl()
  })

constructor(private _loginservice:LoginService,private router:Router){}

loginform(){
  console.log(this.loginform);
    this._loginservice.doLogin(this.login.value).subscribe(
      (data:any)=>{
        alert("login sucsess");
        this.router.navigateByUrl("/dashboard");
        localStorage.setItem('token',data.token);
        
        
      },
      (err:any)=>{
        alert("Login failed");
      }
    )
  

}
}

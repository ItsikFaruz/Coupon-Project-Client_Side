import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/servicies/login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  clyentType : string = "CUSTOMER";
  
  constructor(private LoginService: LoginService ,private router: Router ) { }


  ngOnInit(): void {
  }
  public login(email:string,password:string,clientType:string){
    let subscription = this.LoginService.login(email,password,clientType).subscribe({
      next: (token) =>{
        console.log(token);
        
        sessionStorage.setItem('token',token.toString());
        
        if(clientType === "ADMINISTRATOR" ){
      
          this.router.navigate(["admin-menu"]);
        } 
        else if(clientType === "COMPANY" ){
          
          this.router.navigate(["company-menu"]);
        } 
        else if(clientType === "CUSTOMER" ){
          this.router.navigate(["customer-menu"]);
        } 
        
      },
      error:(e)=>{
        
        let errJson = e.error;
        let errObj = JSON.parse(errJson);
        let errMsg = errObj.message;
        alert(errMsg);
        
      },
    complete:()=>{
      
      subscription.unsubscribe;
    }      

    });

  }
}

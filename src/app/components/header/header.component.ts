import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

// public ifLogin: boolean = true;


  constructor(private router:Router ) { 
  
  }
  
  ngOnInit(): void {
    
  }

  public loginNavigate(){
   
    this.router.navigate(["login"]);
  }
  public logout(){
    sessionStorage.removeItem("token")
    this.router.navigate(["layout"]);
  }



}

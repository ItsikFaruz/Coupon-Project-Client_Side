import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { CompanyService } from 'src/app/servicies/company.service';
import { CustomerService } from 'src/app/servicies/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  public customer!:Customer;  
  constructor(public customerService:CustomerService, private router:Router) { }

  ngOnInit(): void {
 
    let subscription =  this.customerService.getCustomeryDetails().subscribe({

      next:(customer)=>{
        this.customer = customer;
  
      },
      error: (e)=>{
        
        alert(e.error.message);
        this.router.navigate(["customer-menu"]);

      },
      complete:()=>{
        subscription.unsubscribe;
        // this.router.navigate(["admin-menu"]);

      }
      
    });

  }



}

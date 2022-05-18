import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { CompanyService } from 'src/app/servicies/company.service';

@Component({
  selector: 'app-company-details',
  templateUrl: './company-details.component.html',
  styleUrls: ['./company-details.component.css']
})
export class CompanyDetailsComponent implements OnInit {
 
 
  public company!:Company;
 
 
  constructor(public companyService:CompanyService, private router:Router) { }

  ngOnInit(): void {
  
    let subscription =  this.companyService.getCompanyDetails().subscribe({

      next:(company)=>{
        this.company = company;
  
      },
      error: (e)=>{
        
        alert(e.error.message);
        this.router.navigate(["comapny-menu"]);

      },
      complete:()=>{
        subscription.unsubscribe;
        // this.router.navigate(["admin-menu"]);

      }
      
    });

  }
}

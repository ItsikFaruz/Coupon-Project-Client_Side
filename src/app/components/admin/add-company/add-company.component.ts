import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/servicies/admin.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.css']
})
export class AddCompanyComponent implements OnInit {

  public company:Company = new Company();

  constructor(private adminService: AdminService, private router:Router ) { }



  ngOnInit(): void {

  }
  public addCompany (){
    let subscription = this.adminService.addCompany(this.company).subscribe({

      next:(id)=>{
        
        alert("add company: " +id)
        this.router.navigate(["admin-menu"])
        
      },
      error:(e)=>{
        alert(e.error.message);
        this.router.navigate(["admin-menu"])
        
      },
      complete:()=> {
        subscription.unsubscribe;
        this.router.navigate(["admin-menu"])
      }

    });

  }


}

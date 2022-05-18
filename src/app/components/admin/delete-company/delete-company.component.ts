import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/servicies/admin.service';

@Component({
  selector: 'app-delete-company',
  templateUrl: './delete-company.component.html',
  styleUrls: ['./delete-company.component.css']
})
export class DeleteCompanyComponent implements OnInit {

  constructor(private  adminService: AdminService, private router:Router) { }

  public companyId! :number;

  ngOnInit(): void {
  }

  public deleteCompany(){
    let subscription = this. adminService.deleteCompany(this.companyId).subscribe({


      next:(id)=>{
        alert("company " + id + " deleted");

      },
      error:(e)=>{
        alert(e.error.message);
      },
      complete:()=>{
        subscription.unsubscribe;
      }

    });


  }





}

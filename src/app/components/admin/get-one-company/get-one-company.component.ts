import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/servicies/admin.service';


@Component({
  selector: 'app-get-one-company',
  templateUrl: './get-one-company.component.html',
  styleUrls: ['./get-one-company.component.css']
})
export class GetOneCompanyComponent implements OnInit {

  public company!: Company;
  public companyId!: number;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void { }

  public getOneCompany() {
    let subscription = this.adminService.getOneCompany(this.companyId).subscribe({
      next: (company) => {
        this.company = company;
      },

      error: (e) => {
        alert(e.error.message);
        this.router.navigate(["admin-menu"]);
      },

      complete: () => {
        subscription.unsubscribe;
      }

    });

  }

}

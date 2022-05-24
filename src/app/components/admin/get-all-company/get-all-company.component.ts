import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/servicies/admin.service';

@Component({
  selector: 'app-get-all-company',
  templateUrl: './get-all-company.component.html',
  styleUrls: ['./get-all-company.component.css']
})
export class GetAllCompanyComponent implements OnInit {

  public companies!: Company[];

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    let subscription = this.adminService.getAllCompany().subscribe({
      next: (arr) => {
        this.companies = arr;
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
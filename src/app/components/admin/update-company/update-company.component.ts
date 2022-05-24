import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Company } from 'src/app/models/company.model';
import { AdminService } from 'src/app/servicies/admin.service';


@Component({
  selector: 'app-update-company',
  templateUrl: './update-company.component.html',
  styleUrls: ['./update-company.component.css']
})
export class UpdateCompanyComponent implements OnInit {

  public company: Company = new Company();

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void { }

  public updateCompany() {
    let subscription = this.adminService.updateCompany(this.company).subscribe({
      next: (id) => {
        alert("company: " + id + " updated");
      },

      error: (e) => {
        alert(e.error.message);
        this.router.navigate(["admin-menu"]);
      },

      complete: () => {
        subscription.unsubscribe;
        this.router.navigate(["admin-menu"]);
      }

    });

  }
  
}



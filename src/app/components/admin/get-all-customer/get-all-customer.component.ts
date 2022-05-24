import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { AdminService } from 'src/app/servicies/admin.service';


@Component({
  selector: 'app-get-all-customer',
  templateUrl: './get-all-customer.component.html',
  styleUrls: ['./get-all-customer.component.css']
})
export class GetAllCustomerComponent implements OnInit {

  public customers!: Customer[];

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    let subscription = this.adminService.getAllCustomer().subscribe({
      next: (arr) => {
        this.customers = arr;
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

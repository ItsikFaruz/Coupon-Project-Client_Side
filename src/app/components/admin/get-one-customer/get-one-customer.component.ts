import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { AdminService } from 'src/app/servicies/admin.service';


@Component({
  selector: 'app-get-one-customer',
  templateUrl: './get-one-customer.component.html',
  styleUrls: ['./get-one-customer.component.css']
})
export class GetOneCustomerComponent implements OnInit {

  public customer!: Customer;
  public customerId!: number;

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void { }

  public getOneCustomer() {
    let subscription = this.adminService.getOneCustomer(this.customerId).subscribe({
      next: (customer) => {
        this.customer = customer;
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

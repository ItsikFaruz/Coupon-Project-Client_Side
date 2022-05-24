import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { AdminService } from 'src/app/servicies/admin.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent implements OnInit {

  public customer: Customer = new Customer();

  constructor(private adminService: AdminService, private router: Router) { }

  ngOnInit(): void { }

  public addCustomer() {
    let subscription = this.adminService.addCustomer(this.customer).subscribe({
      next: (id) => {
        alert("add customer: " + id)
        this.router.navigate(["admin-menu"])
      }, 

      error: (e) => {
        alert(e.error.message);
        this.router.navigate(["admin-menu"])
      },

      complete: () => {
        subscription.unsubscribe;
        this.router.navigate(["admin-menu"])
      }

    });

  }

}

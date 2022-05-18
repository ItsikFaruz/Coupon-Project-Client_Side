import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from 'src/app/models/customer.model';
import { AdminService } from 'src/app/servicies/admin.service';


@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css']
})
export class UpdateCustomerComponent implements OnInit {

  public customer : Customer = new Customer();

  constructor(private adminService:AdminService , private router:Router   ) { }

  ngOnInit(): void {
  }

  public updateCustomer(){
    let subscription = this.adminService.updateCustomer(this.customer).subscribe({

      next:(id)=>{
       alert("customer: " + id + " updated");
  
      },
      error: (e)=>{
    
        alert(e.error.message);
        this.router.navigate(["admin-menu"]);

      },
      complete:()=>{
        subscription.unsubscribe;
        this.router.navigate(["admin-menu"]);

      }
      
    });

  }

}

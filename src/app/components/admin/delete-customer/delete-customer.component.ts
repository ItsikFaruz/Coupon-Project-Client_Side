import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/servicies/admin.service';

@Component({
  selector: 'app-delete-customer',
  templateUrl: './delete-customer.component.html',
  styleUrls: ['./delete-customer.component.css']
})
export class DeleteCustomerComponent implements OnInit {

  public customerId!:number;

  constructor(private adminService:AdminService, private router:Router ) { }

  ngOnInit(): void {
  }
  public deleteCustomer(){
    let subscription = this.adminService.deleteCustomer(this.customerId).subscribe({


      next:(id)=>{
        alert("customer" + id + " deleted");

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




import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/servicies/admin.service';
import { CompanyService } from 'src/app/servicies/company.service';
import { CustomerService } from 'src/app/servicies/customer.service';

@Component({
  selector: 'app-purchase-coupon',
  templateUrl: './purchase-coupon.component.html',
  styleUrls: ['./purchase-coupon.component.css']
})
export class PurchaseCouponComponent implements OnInit {

  public couponId!: number;


  constructor(private customerservice: CustomerService, private router: Router ) { }

  ngOnInit(): void {
  }

  public purchaeCoupon() {

    let subscription = this.customerservice.purchaseCoupon(this.couponId).subscribe({

      next: () => {
        alert("coupon: " + this.couponId + " purchased");

      },
      error: (e) => {
        alert(e.error.message);
        this.router.navigate(["customer-menu"]);

      },
      complete: () => {

        subscription.unsubscribe;
      }

    });

  }







}

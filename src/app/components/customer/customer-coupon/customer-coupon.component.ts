import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';
import { CustomerService } from 'src/app/servicies/customer.service';

@Component({
  selector: 'app-customer-coupon',
  templateUrl: './customer-coupon.component.html',
  styleUrls: ['./customer-coupon.component.css']
})
export class CustomerCouponComponent implements OnInit {

  public coupons!: Coupon[];

  constructor(private customerservice: CustomerService, private router: Router) { }

  ngOnInit(): void {
    let subscription = this.customerservice.getCustomerCoupon().subscribe({

      next: (arr) => {
        this.coupons = arr;
      },

      error: (e) => {
        alert(e.error.message);
        this.router.navigate(["customer-menu"])
      },

      complete: () => {
        subscription.unsubscribe;
      }

    });

  }
}
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';
import { CustomerService } from 'src/app/servicies/customer.service';

@Component({
  selector: 'app-customer-coupon-max-price',
  templateUrl: './customer-coupon-max-price.component.html',
  styleUrls: ['./customer-coupon-max-price.component.css']
})
export class CustomerCouponMaxPriceComponent implements OnInit {

  constructor(public customerService: CustomerService, private router: Router) { }

  public coupons!: Coupon[];


  ngOnInit(): void { }

  public getCustomerCouponUpToMaxPrice(price: number) {

    let subscription = this.customerService.getAllCustomerCouponUpToMaxPrice(price).subscribe({

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

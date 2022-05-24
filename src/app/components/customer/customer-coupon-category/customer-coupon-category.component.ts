import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';
import { CustomerService } from 'src/app/servicies/customer.service';

@Component({
  selector: 'app-customer-coupon-category',
  templateUrl: './customer-coupon-category.component.html',
  styleUrls: ['./customer-coupon-category.component.css']
})
export class CustomerCouponCategoryComponent implements OnInit {

  public coupons!: Coupon[];

  constructor(public customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  public getCustomerCouponByCategory(category: string) {

    let subscription = this.customerService.getAllCustomerCouponByCategory(category).subscribe({

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

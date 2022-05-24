import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/servicies/company.service';

@Component({
  selector: 'app-company-coupon-price',
  templateUrl: './company-coupon-price.component.html',
  styleUrls: ['./company-coupon-price.component.css']
})
export class CompanyCouponPriceComponent implements OnInit {

  public coupons!: Coupon[];


  constructor(public companyService: CompanyService, private router: Router) { }

  ngOnInit(): void { }
  
  public getCompanyCouponUpToMaxPrice(price: number) {

    let subscription = this.companyService.getCompanyCouponUpToMaxPrice(price).subscribe({
      next: (arr) => {
        this.coupons = arr;
      },

      error: (e) => {
        alert(e.error.message);
        this.router.navigate(["company-menu"])
      },

      complete: () => {
        subscription.unsubscribe;
      }

    });

  }

}

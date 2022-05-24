import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/servicies/company.service';

@Component({
  selector: 'app-company-coupon',
  templateUrl: './company-coupon.component.html',
  styleUrls: ['./company-coupon.component.css']
})
export class CompanyCouponComponent implements OnInit {

  public coupons!: Coupon[];


  constructor(public companyService: CompanyService, private router: Router) { }

  ngOnInit(): void {
    let subscription = this.companyService.getCompanyCoupon().subscribe({
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



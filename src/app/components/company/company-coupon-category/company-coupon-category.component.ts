import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/servicies/company.service';

@Component({
  selector: 'app-company-coupon-category',
  templateUrl: './company-coupon-category.component.html',
  styleUrls: ['./company-coupon-category.component.css']
})
export class CompanyCouponCategoryComponent implements OnInit {

  public coupons!: Coupon[];


  constructor(public companyService: CompanyService, private router: Router) { }

  ngOnInit(): void { }
  public getCompanyCouponByCategory(category: string) {

    let subscription = this.companyService.getCompanyCouponByCategory(category).subscribe({
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

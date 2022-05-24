import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from 'src/app/servicies/company.service';

@Component({
  selector: 'app-delete-coupon',
  templateUrl: './delete-coupon.component.html',
  styleUrls: ['./delete-coupon.component.css']
})
export class DeleteCouponComponent implements OnInit {

  public couponId!: number
  constructor(private companySercive: CompanyService, private router: Router) { }

  ngOnInit(): void { }

  public deleteCoupon() {
    let subscription = this.companySercive.deleteCoupon(this.couponId).subscribe({
      next: (id) => {
        alert("coupon: " + id + " deleted")
      },

      error: (e) => {
        alert(e.error.message);
        this.router.navigate(["company-menu"])

      },
      complete: () => {
        subscription.unsubscribe;
        this.router.navigate(["company-menu"])
      }

    });

  }




}

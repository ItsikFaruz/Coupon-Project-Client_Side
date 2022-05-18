import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/servicies/company.service';

@Component({
  selector: 'app-update-coupon',
  templateUrl: './update-coupon.component.html',
  styleUrls: ['./update-coupon.component.css']
})
export class UpdateCouponComponent implements OnInit {

  public coupon:Coupon = new Coupon();

  constructor(private companyService:CompanyService, private router:Router) { }

  ngOnInit(): void {
  }

  public updateCoupon (category:string){
    this.coupon.category=category;
    let subscription = this.companyService.updateCoupon(this.coupon).subscribe({
      
      next:(id)=>{
        alert("coupon: " +id + " updated")
        this.router.navigate(["company-menu"])
      },
      error:(e)=>{
        alert(e.error.message);
        this.router.navigate(["company-menu"])
        
      },
      complete:()=> {
        subscription.unsubscribe;
        this.router.navigate(["company-menu"])
      }

    });

  }
  public setCategory(){}

}

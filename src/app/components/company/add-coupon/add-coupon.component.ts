
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';
import { CompanyService } from 'src/app/servicies/company.service';


@Component({
  selector: 'app-add-coupon',
  templateUrl: './add-coupon.component.html',
  styleUrls: ['./add-coupon.component.css']
})
export class AddCouponComponent implements OnInit {

  public coupon:Coupon = new Coupon();


  constructor(private companyService:CompanyService, private router:Router) { }

  ngOnInit(): void {
  }

  public addCoupon (category:string){
    this.coupon.category=category;
    let subscription = this.companyService.addCoupon(this.coupon).subscribe({
      
      next:(id)=>{
        alert("add coupon: " +id)
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

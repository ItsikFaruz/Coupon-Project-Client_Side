import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';
import { CustomerService } from 'src/app/servicies/customer.service';

@Component({
  selector: 'app-pre-purchase',
  templateUrl: './pre-purchase.component.html',
  styleUrls: ['./pre-purchase.component.css']
})
export class PrePurchaseComponent implements OnInit {

    public coupon:Coupon = new Coupon();
    imageWidth = 350;
  
  constructor(private activatedRoute:ActivatedRoute , private customerService:CustomerService , private router:Router 
    ) { }

  ngOnInit(): void {
    let couponId = this.activatedRoute.snapshot.params['id']

      let subscription = this.customerService.getOneCoupon(couponId).subscribe({
  
        next:(c)=>{
          console.log(c);
          
          this.coupon=c;
        },
        error:(e)=>{
          alert(e.error.message);
          this.router.navigate(["customer-menu"])
        },
        complete:()=>{
          subscription.unsubscribe;
        }
  
      });
  
    }

    public purchaeCoupon() {
      let couponId = this.activatedRoute.snapshot.params['id']

      let subscription = this.customerService.purchaseCoupon(couponId).subscribe({
  
        next: () => {
          alert("coupon: " + this.coupon.id + " purchased");
  
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
    increaseWidth(){
      this.imageWidth +=10;
    }
    decreaseWidth(){
      this.imageWidth -=10;
    }
    reserWidth(){
      this.imageWidth =350;
    }
  
  
  }


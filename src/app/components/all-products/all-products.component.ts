import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Coupon } from 'src/app/models/coupon.model';
import { CustomerService } from 'src/app/servicies/customer.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  public coupons!: Coupon[];
  constructor(public customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    let subscription = this.customerService.getAllProduct().subscribe({
      next: (arr) => {
        this.coupons = arr;
      },

      error: (e) => {
        alert(e.error.message);
        this.router.navigate(["layout"])
      },

      complete: () => {
        subscription.unsubscribe;
      }

    });

  }
  
}




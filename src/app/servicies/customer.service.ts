import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Coupon } from '../models/coupon.model';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private httpclient:HttpClient) { }



public purchaseCoupon(couponId:number) :Observable<any>{
  let url = "http://localhost:8080/CUSTOMER/purchase_coupon/"+couponId;
  let token:string | null = sessionStorage.getItem("token");
  token = token? token:""; // make sure token is not null
  let theHeaders = new HttpHeaders({token:token});
  let options = {headers:theHeaders,responseType: undefined};
  
  return this.httpclient.post<any>(url , couponId , options);
  
 }
 public getCustomerCoupon() : Observable<Coupon[]>{
  let url = "http://localhost:8080/CUSTOMER/get_all_customer_coupon";
  let token:string | null = sessionStorage.getItem("token");
  token = token? token:"";
  let theHeaders = new HttpHeaders({token:token});
  let options = {headers: theHeaders, responseType: undefined };

  return this.httpclient.get<Coupon[]>(url,options);
}
 
 public getAllProduct() : Observable<Coupon[]>{
  let url = "http://localhost:8080/LAYOUT/get_all_products";
  let token:string | null = sessionStorage.getItem("token");
  token = token? token:"";
  let theHeaders = new HttpHeaders({token:token});
  let options = {headers: theHeaders, responseType: undefined };

  return this.httpclient.get<Coupon[]>(url,options);
  
 }
  public getOneCoupon(couponId:number) : Observable<Coupon>{
  let url = "http://localhost:8080/LAYOUT/get_one_coupon/"+couponId;
  let token:string | null = sessionStorage.getItem("token");
  token = token? token:"";
  let theHeaders = new HttpHeaders({token:token});
  let options = {headers: theHeaders, responseType: undefined };

  return this.httpclient.get<Coupon>(url,options);
}

public getAllCustomerCouponByCategory(category:string) : Observable<Coupon[]>{
  let url = "http://localhost:8080/CUSTOMER/get_all_customer_coupon_by_category/"+category;
  let token:string | null = sessionStorage.getItem("token");
  token = token? token:"";
  let theHeaders = new HttpHeaders({token:token});
  let options = {headers: theHeaders, responseType: undefined };

  return this.httpclient.get<Coupon[]>(url,options);
}
public getAllCustomerCouponUpToMaxPrice(price:number) : Observable<Coupon[]>{
  let url = "http://localhost:8080/CUSTOMER/get_all_customer_coupon_up_to_max_price/"+price;
  let token:string | null = sessionStorage.getItem("token");
  token = token? token:"";
  let theHeaders = new HttpHeaders({token:token});
  let options = {headers: theHeaders, responseType: undefined };

  return this.httpclient.get<Coupon[]>(url,options);
}
public getCustomeryDetails() : Observable<Customer>{
  let url = "http://localhost:8080/CUSTOMER/get_customer_details";
  let token:string | null = sessionStorage.getItem("token");
  token = token? token:"";
  let theHeaders = new HttpHeaders({token:token});
  let options = {headers: theHeaders, responseType: undefined };

  return this.httpclient.get<Customer>(url,options);
}






}
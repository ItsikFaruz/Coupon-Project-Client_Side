import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { Coupon } from '../models/coupon.model';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private httpclient: HttpClient) { }

  public addCoupon(coupon: Coupon): Observable<any> {
    let url = "http://localhost:8080/COMPANY/add_coupon";
    let token: string | null = sessionStorage.getItem("token");
    token = token ? token : ""; // make sure token is not null
    let theHeaders = new HttpHeaders({ token: token });
    let options = { headers: theHeaders, responseType: undefined };

    return this.httpclient.post<any>(url, coupon, options);
  }

  public updateCoupon(coupon: Coupon): Observable<any> {
    let url = "http://localhost:8080/COMPANY/update_coupon";
    let token: string | null = sessionStorage.getItem("token");
    token = token ? token : "";
    let theHeaders = new HttpHeaders({ token: token });
    let options = { headers: theHeaders, responseType: undefined };

    return this.httpclient.put<any>(url, coupon, options);
  }

  public deleteCoupon(couponId: number): Observable<any> {
    let url = "http://localhost:8080/COMPANY/delete_coupon/" + couponId;
    let token: string | null = sessionStorage.getItem("token");
    token = token ? token : "";
    let theHeaders = new HttpHeaders({ token: token });
    let options = { headers: theHeaders, responseType: undefined };

    return this.httpclient.delete<any>(url, options);
  }

  public getCompanyCoupon(): Observable<Coupon[]> {
    let url = "http://localhost:8080/COMPANY/get_company_coupon";
    let token: string | null = sessionStorage.getItem("token");
    token = token ? token : "";
    let theHeaders = new HttpHeaders({ token: token });
    let options = { headers: theHeaders, responseType: undefined };

    return this.httpclient.get<Coupon[]>(url, options);
  }

  public getCompanyCouponByCategory(category: string): Observable<Coupon[]> {
    let url = "http://localhost:8080/COMPANY/get_company_coupon_by_category/" + category;
    let token: string | null = sessionStorage.getItem("token");
    token = token ? token : "";
    let theHeaders = new HttpHeaders({ token: token });
    let options = { headers: theHeaders, responseType: undefined };

    return this.httpclient.get<Coupon[]>(url, options);
  }

  public getCompanyCouponUpToMaxPrice(price: number): Observable<Coupon[]> {
    let url = "http://localhost:8080/COMPANY/get_company_coupon_upToMax_price/" + price;
    let token: string | null = sessionStorage.getItem("token");
    token = token ? token : "";
    let theHeaders = new HttpHeaders({ token: token });
    let options = { headers: theHeaders, responseType: undefined };

    return this.httpclient.get<Coupon[]>(url, options);
  }

  public getCompanyDetails(): Observable<Company> {
    let url = "http://localhost:8080/COMPANY/get_company_details";
    let token: string | null = sessionStorage.getItem("token");
    token = token ? token : "";
    let theHeaders = new HttpHeaders({ token: token });
    let options = { headers: theHeaders, responseType: undefined };

    return this.httpclient.get<Company>(url, options);
  }

}

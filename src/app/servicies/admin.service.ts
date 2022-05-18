import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../models/company.model';
import { Customer } from '../models/customer.model';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor( private httpclient: HttpClient) { }

  public addCompany(company:Company) :Observable<any>{
    let url = "http://localhost:8080/ADMINISTRATOR/add_company";
    let token:string | null = sessionStorage.getItem("token");
    token = token? token:""; // make sure token is not null
    let theHeaders = new HttpHeaders({token:token});
    let options = {headers:theHeaders,responseType: undefined};
    
    return this.httpclient.post<any>(url,company,options);
  
  }

  public updateCompany(company:Company) :Observable<any>{

    let url = "http://localhost:8080/ADMINISTRATOR/update_company";
    let token:string | null = sessionStorage.getItem("token");
    token = token? token:"";
    let theHeaders = new HttpHeaders({token:token});
    let options = {headers:theHeaders,responseType: undefined};

    return this.httpclient.put<any>(url , company , options);

  }

  public deleteCompany (companyId:number) :Observable<any>{

    let url = "http://localhost:8080/ADMINISTRATOR/delete_company/"+companyId;
    let token:string | null = sessionStorage.getItem("token");
    token = token? token:"";
    let theHeaders = new HttpHeaders({token:token});
    let options = {headers: theHeaders, responseType: undefined };

    return this.httpclient.delete<any>(url ,options);

  }

  public getAllCompany() : Observable<Company[]>{
    let url = "http://localhost:8080/ADMINISTRATOR/get_all_companies";
    let token:string | null = sessionStorage.getItem("token");
    token = token? token:"";
    let theHeaders = new HttpHeaders({token:token});
    let options = {headers: theHeaders, responseType: undefined };

    return this.httpclient.get<Company[]>(url,options);
  }

  public getOneCompany(companyId:number) : Observable<Company>{
    let url = "http://localhost:8080/ADMINISTRATOR/get_one_company/"+companyId;
    let token:string | null = sessionStorage.getItem("token");
    token = token? token:"";
    let theHeaders = new HttpHeaders({token:token});
    let options = {headers: theHeaders, responseType: undefined };

    return this.httpclient.get<Company>(url,options);
  }
  public addCustomer(customer:Customer) :Observable<any>{
    let url = "http://localhost:8080/ADMINISTRATOR/add_customer";
    let token:string | null = sessionStorage.getItem("token");
    token = token? token:""; 
    let theHeaders = new HttpHeaders({token:token});
    let options = {headers:theHeaders,responseType: undefined};
    
    return this.httpclient.post<any>(url,customer,options);
  
  }

  public updateCustomer(customer:Customer) :Observable<any>{

    let url = "http://localhost:8080/ADMINISTRATOR/update_customer";
    let token:string | null = sessionStorage.getItem("token");
    token = token? token:"";
    let theHeaders = new HttpHeaders({token:token});
    let options = {headers:theHeaders,responseType: undefined};

    return this.httpclient.put<any>(url , customer , options);

  }

  public deleteCustomer(customerId:number) :Observable<any>{

    let url = "http://localhost:8080/ADMINISTRATOR/delete_customer/"+customerId;
    let token:string | null = sessionStorage.getItem("token");
    token = token? token:"";
    let theHeaders = new HttpHeaders({token:token});
    let options = {headers: theHeaders, responseType: undefined };

    return this.httpclient.delete<any>(url ,options);

  }

  public getAllCustomer() : Observable<Customer[]>{
    let url = "http://localhost:8080/ADMINISTRATOR/get_all_customer";
    let token:string | null = sessionStorage.getItem("token");
    token = token? token:"";
    let theHeaders = new HttpHeaders({token:token});
    let options = {headers: theHeaders, responseType: undefined };

    return this.httpclient.get<Customer[]>(url,options);
  }
  public getOneCustomer(customerId:number) : Observable<Customer>{
    let url = "http://localhost:8080/ADMINISTRATOR/get_one_customer/"+customerId;
    let token:string | null = sessionStorage.getItem("token");
    token = token? token:"";
    let theHeaders = new HttpHeaders({token:token});
    let options = {headers: theHeaders, responseType: undefined };

    return this.httpclient.get<Customer>(url,options);
  }





















}
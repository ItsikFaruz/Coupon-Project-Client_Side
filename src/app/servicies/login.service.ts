import { HttpClient, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient:HttpClient ) { }
  public login(email:string,password:string,clientType:string): Observable<any>  {
  let url = "http://localhost:8080/login"
  let body = "email=" + email + "&password="+password +"&clientType=" +clientType;
  let theHeaders = new HttpHeaders().set("Content-Type" ,"application/x-www-form-urlencoded");
  // let theHeaders = new HttpHeaders();
  let options: any = {headers: theHeaders , responseType: 'text'};
  // return this.httpClient.post<any>(url,body,options);
  return this.httpClient.post<any>(url,body,options);
 
} 

}

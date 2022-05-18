import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { LayoutComponent } from './components/layout/layout.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { AddCompanyComponent } from './components/admin/add-company/add-company.component';
import { AdminMenuComponent } from './components/admin/admin-menu/admin-menu.component';
import { RootComponent } from './components/root/root.component';
import { FooterComponent } from './components/footer/footer.component';
import { UpdateCompanyComponent } from './components/admin/update-company/update-company.component';
import { DeleteCompanyComponent } from './components/admin/delete-company/delete-company.component';
import { GetAllCompanyComponent } from './components/admin/get-all-company/get-all-company.component';
import { HeaderComponent } from './components/header/header.component';
import { GetOneCompanyComponent } from './components/admin/get-one-company/get-one-company.component';
import { AddCustomerComponent } from './components/admin/add-customer/add-customer.component';
import { UpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/admin/delete-customer/delete-customer.component';
import { GetAllCustomerComponent } from './components/admin/get-all-customer/get-all-customer.component';
import { GetOneCustomerComponent } from './components/admin/get-one-customer/get-one-customer.component';
import { CompanyMenuComponent } from './components/company/company-menu/company-menu.component';
import { UpdateCouponComponent } from './components/company/update-coupon/update-coupon.component';
import { DeleteCouponComponent } from './components/company/delete-coupon/delete-coupon.component';
import { CompanyCouponComponent } from './components/company/company-coupon/company-coupon.component';
import { CompanyCouponCategoryComponent } from './components/company/company-coupon-category/company-coupon-category.component';
import { CompanyCouponPriceComponent } from './components/company/company-coupon-price/company-coupon-price.component';
import { CompanyDetailsComponent } from './components/company/company-details/company-details.component';
import { AddCouponComponent } from './components/company/add-coupon/add-coupon.component';
import { CustomerMenuComponent } from './components/customer/customer-menu/customer-menu.component';
import { PurchaseCouponComponent } from './components/customer/purchase-coupon/purchase-coupon.component';
import { CustomerCouponComponent } from './components/customer/customer-coupon/customer-coupon.component';
import { CustomerCouponCategoryComponent } from './components/customer/customer-coupon-category/customer-coupon-category.component';
import { CustomerCouponMaxPriceComponent } from './components/customer/customer-coupon-max-price/customer-coupon-max-price.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { ThambnailComponent } from './components/thambnail/thambnail.component';
import { AllProductsComponent } from './components/all-products/all-products.component';

import { WebsiteCouponsComponent } from './components/customer/website-coupons/website-coupons.component';
import { PrePurchaseComponent } from './components/customer/pre-purchase/pre-purchase.component';
import { Page404Component } from './components/page404/page404.component';


@NgModule({
  declarations: [
    LayoutComponent,
    LoginComponent,
    AddCompanyComponent,
    AdminMenuComponent,
    RootComponent,
    FooterComponent,
    UpdateCompanyComponent,
    DeleteCompanyComponent,
    GetAllCompanyComponent,
    HeaderComponent,
    GetOneCompanyComponent,
    AddCustomerComponent,
    UpdateCustomerComponent,
    DeleteCustomerComponent,
    GetAllCustomerComponent,
    GetOneCustomerComponent,
    CompanyMenuComponent,
    AddCouponComponent,
    UpdateCouponComponent,
    DeleteCouponComponent,
    CompanyCouponComponent,
    CompanyCouponCategoryComponent,
    CompanyCouponPriceComponent,
    CompanyDetailsComponent,
    CustomerMenuComponent,
    PurchaseCouponComponent,
    CustomerCouponComponent,
    CustomerCouponCategoryComponent,
    CustomerCouponMaxPriceComponent,
    CustomerDetailsComponent,
    ThambnailComponent,
    AllProductsComponent,
    WebsiteCouponsComponent,
    PrePurchaseComponent,
    Page404Component,
  
  


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }

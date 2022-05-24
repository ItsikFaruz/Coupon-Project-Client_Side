import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LayoutComponent } from './components/layout/layout.component';
import { AddCompanyComponent } from './components/admin/add-company/add-company.component';
import { AdminMenuComponent } from './components/admin/admin-menu/admin-menu.component';
import { UpdateCompanyComponent } from './components/admin/update-company/update-company.component';
import { DeleteCompanyComponent } from './components/admin/delete-company/delete-company.component';
import { GetAllCompanyComponent } from './components/admin/get-all-company/get-all-company.component';
import { GetOneCompanyComponent } from './components/admin/get-one-company/get-one-company.component';
import { UpdateCustomerComponent } from './components/admin/update-customer/update-customer.component';
import { DeleteCustomerComponent } from './components/admin/delete-customer/delete-customer.component';
import { GetAllCustomerComponent } from './components/admin/get-all-customer/get-all-customer.component';
import { GetOneCustomerComponent } from './components/admin/get-one-customer/get-one-customer.component';
import { CompanyMenuComponent } from './components/company/company-menu/company-menu.component';
import { DeleteCouponComponent } from './components/company/delete-coupon/delete-coupon.component';
import { CompanyCouponComponent } from './components/company/company-coupon/company-coupon.component';
import { CompanyCouponPriceComponent } from './components/company/company-coupon-price/company-coupon-price.component';
import { CompanyCouponCategoryComponent } from './components/company/company-coupon-category/company-coupon-category.component';
import { UpdateCouponComponent } from './components/company/update-coupon/update-coupon.component';
import { CompanyDetailsComponent } from './components/company/company-details/company-details.component';
import { AddCustomerComponent } from './components/admin/add-customer/add-customer.component';
import { AddCouponComponent } from './components/company/add-coupon/add-coupon.component';
import { CustomerMenuComponent } from './components/customer/customer-menu/customer-menu.component';
import { PurchaseCouponComponent } from './components/customer/purchase-coupon/purchase-coupon.component';
import { CustomerCouponComponent } from './components/customer/customer-coupon/customer-coupon.component';
import { CustomerCouponMaxPriceComponent } from './components/customer/customer-coupon-max-price/customer-coupon-max-price.component';
import { CustomerCouponCategoryComponent } from './components/customer/customer-coupon-category/customer-coupon-category.component';
import { CustomerDetailsComponent } from './components/customer/customer-details/customer-details.component';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { WebsiteCouponsComponent } from './components/customer/website-coupons/website-coupons.component';
import { PrePurchaseComponent } from './components/customer/pre-purchase/pre-purchase.component';
import { Page404Component } from './components/page404/page404.component';


const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "layout", component: LayoutComponent },

  {
    path: "admin-menu", component: AdminMenuComponent, children: [
      { path: "add-company", component: AddCompanyComponent },
      { path: "update-company", component: UpdateCompanyComponent },
      { path: "delete-company", component: DeleteCompanyComponent },
      { path: "get-all-company", component: GetAllCompanyComponent },
      { path: "get-one-company", component: GetOneCompanyComponent },
      { path: "add-customer", component: AddCustomerComponent },
      { path: "update-customer", component: UpdateCustomerComponent },
      { path: "delete-customer", component: DeleteCustomerComponent },
      { path: "get-all-customer", component: GetAllCustomerComponent },
      { path: "get-one-customer", component: GetOneCustomerComponent },
    ]
  },
  {
    path: "company-menu", component: CompanyMenuComponent, children: [
      { path: "add-coupon", component: AddCouponComponent },
      { path: "update-coupon", component: UpdateCouponComponent },
      { path: "delete-coupon", component: DeleteCouponComponent },
      { path: "company-coupon", component: CompanyCouponComponent },
      { path: "company-coupon-price", component: CompanyCouponPriceComponent },
      { path: "company-coupon-category", component: CompanyCouponCategoryComponent },
      { path: "company-details", component: CompanyDetailsComponent },
    ]
  },
  {
    path: "customer-menu", component: CustomerMenuComponent, children: [
      { path: "website-coupon", component: WebsiteCouponsComponent },
      { path: "purchase-coupon", component: PurchaseCouponComponent },
      { path: "pre-purchase/:id", component: PrePurchaseComponent },
      { path: "customer-coupon", component: CustomerCouponComponent },
      { path: "customer-coupon-max-price", component: CustomerCouponMaxPriceComponent },
      { path: "customer-coupon-category", component: CustomerCouponCategoryComponent },
      { path: "customer-details", component: CustomerDetailsComponent },
    ]
  },

  { path: "", redirectTo: "/layout", pathMatch: "full" },
  { path: "**", component: Page404Component }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


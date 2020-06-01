import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DefaultComponent } from "./default/default.component";
import { NewsLetterComponent } from "./views/news-letter/news-letter.component";
import { PageNotFoundComponent } from "./views/page-not-found/page-not-found.component";
import { SuccessPaymentComponent } from "./views/success-payment/success-payment.component";
import { ErrorPaymentComponent } from "./views/error-payment/error-payment.component";
import { ProductApplicationFunnelComponent } from './views/product-application-funnel/product-application-funnel.component';
import { DefaultWithSubHeaderComponent } from './default-with-sub-header/default-with-sub-header.component';

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "/admin/current-policies",
  },
  {
    path: "",
    component: DefaultComponent,
    children: [
      {
        path: "home",
        loadChildren: () =>
          import("./views/home/home.module").then((m) => m.HomeModule),
      }
    ],
  },
  {
    path: "",
    component: DefaultWithSubHeaderComponent,
    children: [
      {
        path: "product-application-funnel",
        component: ProductApplicationFunnelComponent
      }
    ],
  },
  {
    path: "auth",
    loadChildren: () =>
      import("./views/auth/auth.module").then((m) => m.AuthModule),
  },
  {
    path: "newsletter",
    component: NewsLetterComponent,
  },
  {
    path: "not-found",
    component: PageNotFoundComponent,
  },
  {
    path: "payment-success",
    component: SuccessPaymentComponent,
  },
  {
    path: "payment-error",
    component: ErrorPaymentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontRoutingModule { }

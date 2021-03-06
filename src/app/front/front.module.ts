import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { DefaultComponent } from './default/default.component';
import { SharedComponentsModule } from './shared-components/shared-components.module';
import { NewsLetterComponent } from './views/news-letter/news-letter.component';
import { PageNotFoundComponent } from './views/page-not-found/page-not-found.component';
import { SuccessPaymentComponent } from './views/success-payment/success-payment.component';
import { ErrorPaymentComponent } from './views/error-payment/error-payment.component';
import { MaterialModule } from '../material/material.module';
import { ProductApplicationFunnelComponent } from './views/product-application-funnel/product-application-funnel.component';
import { DefaultWithSubHeaderComponent } from './default-with-sub-header/default-with-sub-header.component';
import { ApiDetailsComponent } from './views/api-details/api-details.component';
import { ComponentsModule } from '../admin/components/components.module';


@NgModule({
  declarations: [
    DefaultComponent,
    NewsLetterComponent,
    PageNotFoundComponent,
    SuccessPaymentComponent,
    ErrorPaymentComponent,
    ProductApplicationFunnelComponent,
    DefaultWithSubHeaderComponent,
    ApiDetailsComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    SharedComponentsModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class FrontModule { }

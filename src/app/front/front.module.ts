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


@NgModule({
  declarations: [
    DefaultComponent,
    NewsLetterComponent,
    PageNotFoundComponent,
    SuccessPaymentComponent,
    ErrorPaymentComponent
  ],
  imports: [
    CommonModule,
    FrontRoutingModule,
    SharedComponentsModule,
    MaterialModule
  ]
})
export class FrontModule { }

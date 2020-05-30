import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DefaultLayoutComponent } from './containers';
import { ComponentsModule } from './components/components.module';
import { MaterialModule } from '../material/material.module';
import { CurrentPoliciesComponent } from './views/current-policies/current-policies.component';
import { ApplicationsComponent } from './views/applications/applications.component';
import { SettingsComponent } from './views/settings/settings.component';
import { QuotationComponent } from './views/quotation/quotation.component';
import { SitemapComponent } from './views/sitemap/sitemap.component';
import { QuotationOneComponent } from './views/quotation-one/quotation-one.component';
import { ProductProviderComponent } from './views/product-provider/product-provider.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

@NgModule({
  declarations: [
    ...APP_CONTAINERS,
    CurrentPoliciesComponent,
    ApplicationsComponent,
    SettingsComponent,
    QuotationComponent,
    SitemapComponent,
    QuotationOneComponent,
    ProductProviderComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class AdminModule { }

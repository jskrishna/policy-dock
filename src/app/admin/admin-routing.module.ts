import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DefaultLayoutComponent } from './containers/default-layout/default-layout.component';
import { CurrentPoliciesComponent } from './views/current-policies/current-policies.component';
import { ApplicationsComponent } from './views/applications/applications.component';
import { SettingsComponent } from './views/settings/settings.component';
import { QuotationComponent } from './views/quotation/quotation.component';
import { SitemapComponent } from './views/sitemap/sitemap.component';
import { QuotationOneComponent } from './views/quotation-one/quotation-one.component';
import { ProductProviderComponent } from './views/product-provider/product-provider.component';
import { AdministartionSettingsComponent } from './views/administartion-settings/administartion-settings.component';
import { PolicyAdministrationComponent } from './views/policy-administration/policy-administration.component';
import { ModalsComponent } from './views/modals/modals.component';
import { AllComponentsComponent } from './views/all-components/all-components.component';


export const routes: Routes = [
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home',
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./views/dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'current-policies',
        component: CurrentPoliciesComponent
      },
      {
        path: 'policy-administration',
        component: PolicyAdministrationComponent
      },
      {
        path: 'applications',
        component: ApplicationsComponent
      },
      {
        path: 'settings',
        component: SettingsComponent
      },
      {
        path: 'quotation',
        component: QuotationComponent,
      },
      {
        path: 'quotation1',
        component: QuotationOneComponent
      },
      {
        path: 'product-provider',
        component: ProductProviderComponent
      },
      {
        path: 'administartion-settings',
        component: AdministartionSettingsComponent
      },
      {
        path: 'sitemap',
        component: SitemapComponent
      },
      {
        path: 'modals',
        component: ModalsComponent
      },
      {
        path: 'all-components',
        component: AllComponentsComponent
      },
      {
        path: 'dashboard',
        redirectTo: ''
      }
    ]
  },
  // { path: '**', component: P404Component }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TablePolicyComponent } from './table-policy/table-policy.component';
import { MaterialModule } from 'src/app/material/material.module';
import { TableApplicationComponent } from './table-application/table-application.component';
import { PaymentsComponent } from './payments/payments.component';
import { TablePolicyAdministrationComponent } from './table-policy-administration/table-policy-administration.component';
import { TableAvailableEndpointsComponent } from './table-available-endpoints/table-available-endpoints.component';
import { TableQuotationComponent } from './table-quotation/table-quotation.component';
import { TablePolicyScheduleComponent } from './table-policy-schedule/table-policy-schedule.component';
import { TableProductProviderPolicyAdminComponent } from './table-product-provider-policy-admin/table-product-provider-policy-admin.component';
import { BannerButtonComponent } from './banner-button/banner-button.component';
import { ApiEndpointsComponent } from './api-endpoints/api-endpoints.component';
import { PolicyAdminEndpointComponent } from './policy-admin-endpoint/policy-admin-endpoint.component';
import { PolicyAdminEnpointCodeComponent } from './policy-admin-enpoint-code/policy-admin-enpoint-code.component';
import { PolicyAdminEndpointEditComponent } from './policy-admin-endpoint-edit/policy-admin-endpoint-edit.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { PortalModule } from '@angular/cdk/portal';
import { CustomSelectComponent } from './custom-dropdown/custom-select.component';
import { CustomSelectOptionComponent } from './custom-dropdown/custom-select-option.component';
import { DropdownComponent } from './custom-dropdown/dropdown.component';

@NgModule({
  declarations: [
    TablePolicyComponent,
    TableApplicationComponent,
    PaymentsComponent,
    TablePolicyAdministrationComponent,
    TableAvailableEndpointsComponent,
    TableQuotationComponent,
    TablePolicyScheduleComponent,
    TableProductProviderPolicyAdminComponent,
    BannerButtonComponent,
    ApiEndpointsComponent,
    PolicyAdminEndpointComponent,
    PolicyAdminEnpointCodeComponent,
    PolicyAdminEndpointEditComponent,
    CustomSelectComponent,
    CustomSelectOptionComponent,
    DropdownComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FormsModule,
    OverlayModule,
    PortalModule
  ],
  exports: [
    TablePolicyComponent,
    TableApplicationComponent,
    PaymentsComponent,
    TablePolicyAdministrationComponent,
    TableAvailableEndpointsComponent,
    TableQuotationComponent,
    TablePolicyScheduleComponent,
    TableProductProviderPolicyAdminComponent,
    BannerButtonComponent,
    ApiEndpointsComponent,
    PolicyAdminEndpointComponent,
    PolicyAdminEnpointCodeComponent,
    PolicyAdminEndpointEditComponent,
    CustomSelectComponent,
    CustomSelectOptionComponent,
    DropdownComponent
  ]
})
export class ComponentsModule { }

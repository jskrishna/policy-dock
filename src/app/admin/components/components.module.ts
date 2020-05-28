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

@NgModule({
  declarations: [
    TablePolicyComponent,
    TableApplicationComponent,
    PaymentsComponent,
    TablePolicyAdministrationComponent,
    TableAvailableEndpointsComponent,
    TableQuotationComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule
  ],
  exports: [
    TablePolicyComponent,
    TableApplicationComponent,
    PaymentsComponent,
    TablePolicyAdministrationComponent,
    TableAvailableEndpointsComponent,
    TableQuotationComponent
  ]
})
export class ComponentsModule { }

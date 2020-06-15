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
import { ButtonComponent } from './all-components-subcomponents/button/button.component';
import { InputFieldComponent } from './all-components-subcomponents/input-field/input-field.component';
import { CheckboxComponent } from './all-components-subcomponents/checkbox/checkbox.component';
import { RadioButtonComponent } from './all-components-subcomponents/radio-button/radio-button.component';
import { TabsComponent } from './all-components-subcomponents/tabs/tabs.component';
import { TextEditorComponent } from './all-components-subcomponents/text-editor/text-editor.component';
import { EditorModule } from "@tinymce/tinymce-angular";
import { StepperComponent } from './all-components-subcomponents/stepper/stepper.component';
import { TableCurrentPolicyComponent } from './all-components-subcomponents/table-current-policy/table-current-policy.component';
import { TableApplicationDetailsComponent } from './all-components-subcomponents/table-application-details/table-application-details.component';
import { NotificationsComponent } from './all-components-subcomponents/notifications/notifications.component';
import { HeaderAfterLoginComponent } from './all-components-subcomponents/header-after-login/header-after-login.component';
import { AlertComponent } from './all-components-subcomponents/alert/alert.component';
import { IconsComponent } from './icons/icons.component';

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
    DropdownComponent,
    ButtonComponent,
    InputFieldComponent,
    CheckboxComponent,
    RadioButtonComponent,
    TabsComponent,
    TextEditorComponent,
    StepperComponent,
    TableCurrentPolicyComponent,
    TableApplicationDetailsComponent,
    NotificationsComponent,
<<<<<<< Updated upstream
    HeaderAfterLoginComponent,
    AlertComponent
=======
    IconsComponent
>>>>>>> Stashed changes
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    FormsModule,
    OverlayModule,
    PortalModule,
    EditorModule,
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
    DropdownComponent,
    ButtonComponent,
    InputFieldComponent,
    CheckboxComponent,
    RadioButtonComponent,
    TabsComponent,
    TextEditorComponent,
    StepperComponent,
    TableCurrentPolicyComponent,
    TableApplicationDetailsComponent,
    NotificationsComponent,
    HeaderAfterLoginComponent,
    AlertComponent
  ]
})
export class ComponentsModule { }

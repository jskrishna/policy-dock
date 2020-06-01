import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { LoginComponent } from "./login/login.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { MaterialModule } from "../../../material/material.module";
import { SharedComponentsModule } from '../../shared-components/shared-components.module';

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedComponentsModule,
    MaterialModule,
  ],
  exports: [],
})
export class AuthModule { }

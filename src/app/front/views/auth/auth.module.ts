import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AuthRoutingModule } from "./auth-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { ComponentsModule } from "../../components/components.module";
import { LoginComponent } from "./login/login.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { MaterialModule } from "../../../material/material.module";

@NgModule({
  declarations: [LoginComponent, ForgotPasswordComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ComponentsModule,
    MaterialModule,
  ],
  exports: [],
})
export class AuthModule {}

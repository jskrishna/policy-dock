import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DefaultLayoutComponent } from './containers';
import { ComponentsModule } from './components/components.module';
import { MaterialModule } from '../material/material.module';
import { CurrentPoliciesComponent } from './views/current-policies/current-policies.component';

const APP_CONTAINERS = [
  DefaultLayoutComponent
];

@NgModule({
  declarations: [
    ...APP_CONTAINERS,
    CurrentPoliciesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ComponentsModule,
    MaterialModule
  ]
})
export class AdminModule { }

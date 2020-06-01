import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from 'src/app/material/material.module';
import { ComponentsModule } from 'src/app/admin/components/components.module';
import { PortalModule } from '@angular/cdk/portal';
import { OverlayModule } from '@angular/cdk/overlay';
import { HomeEndpointsComponent } from './home-endpoints/home-endpoints.component';
import { BasicInfoComponent } from './basic-info/basic-info.component';
import { CarInfoComponent } from './car-info/car-info.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeEndpointsComponent,
    BasicInfoComponent,
    CarInfoComponent,
    SubHeaderComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    MaterialModule,
    ComponentsModule,
    OverlayModule,
    PortalModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeEndpointsComponent,
    BasicInfoComponent,
    CarInfoComponent,
    SubHeaderComponent
  ]
})
export class SharedComponentsModule { }

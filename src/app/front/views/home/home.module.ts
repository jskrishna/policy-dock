import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { SharedComponentsModule } from '../../shared-components/shared-components.module';
import { MaterialModule } from 'src/app/material/material.module';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SharedComponentsModule,
    MaterialModule
  ],
  exports: [
    HomeComponent
  ]
})
export class HomeModule { }

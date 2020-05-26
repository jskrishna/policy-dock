import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SidenavbarComponent } from './sidenavbar/sidenavbar.component';


@NgModule({
  declarations: [
    SidenavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [
    SidenavbarComponent
  ]
})
export class ComponentsModule { }

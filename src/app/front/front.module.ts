import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { DefaultComponent } from './default/default.component';
import { ComponentsModule } from './components/components.module';


@NgModule({
  declarations: [DefaultComponent],
  imports: [
    CommonModule,
    FrontRoutingModule,
    ComponentsModule
  ]
})
export class FrontModule { }

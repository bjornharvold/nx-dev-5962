import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App3DomainModule } from '@dev/app3/domain';
import { Comp3Component } from './comp3.component';

@NgModule({
  imports: [CommonModule, App3DomainModule],
  declarations: [Comp3Component],
  exports: [Comp3Component],
})
export class App3FeatureComp3Module {}

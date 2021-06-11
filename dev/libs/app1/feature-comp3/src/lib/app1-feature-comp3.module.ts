import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App1DomainModule } from '@dev/app1/domain';
import { Comp3Component } from './comp3.component';

@NgModule({
  imports: [CommonModule, App1DomainModule],
  declarations: [Comp3Component],
  exports: [Comp3Component],
})
export class App1FeatureComp3Module {}

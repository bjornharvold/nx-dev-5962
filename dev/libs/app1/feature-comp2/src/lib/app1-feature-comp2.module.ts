import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App1DomainModule } from '@dev/app1/domain';
import { Comp2Component } from './comp2.component';

@NgModule({
  imports: [CommonModule, App1DomainModule],
  declarations: [Comp2Component],
  exports: [Comp2Component],
})
export class App1FeatureComp2Module {}

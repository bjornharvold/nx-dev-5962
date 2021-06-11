import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App3DomainModule } from '@dev/app3/domain';
import { Comp2Component } from './comp2.component';

@NgModule({
  imports: [CommonModule, App3DomainModule],
  declarations: [Comp2Component],
  exports: [Comp2Component],
})
export class App3FeatureComp2Module {}

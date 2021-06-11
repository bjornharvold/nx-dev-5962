import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App2DomainModule } from '@dev/app2/domain';
import { Comp2Component } from './comp2.component';

@NgModule({
  imports: [CommonModule, App2DomainModule],
  declarations: [Comp2Component],
  exports: [Comp2Component],
})
export class App2FeatureComp2Module {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App5DomainModule } from '@dev/app5/domain';
import { Comp2Component } from './comp2.component';

@NgModule({
  imports: [CommonModule, App5DomainModule],
  declarations: [Comp2Component],
  exports: [Comp2Component],
})
export class App5FeatureComp2Module {}

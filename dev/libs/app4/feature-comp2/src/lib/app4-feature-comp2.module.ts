import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App4DomainModule } from '@dev/app4/domain';
import { Comp2Component } from './comp2.component';

@NgModule({
  imports: [CommonModule, App4DomainModule],
  declarations: [Comp2Component],
  exports: [Comp2Component],
})
export class App4FeatureComp2Module {}

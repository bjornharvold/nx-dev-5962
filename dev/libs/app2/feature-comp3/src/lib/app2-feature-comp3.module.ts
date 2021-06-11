import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App2DomainModule } from '@dev/app2/domain';
import { Comp3Component } from './comp3.component';

@NgModule({
  imports: [CommonModule, App2DomainModule],
  declarations: [Comp3Component],
  exports: [Comp3Component],
})
export class App2FeatureComp3Module {}

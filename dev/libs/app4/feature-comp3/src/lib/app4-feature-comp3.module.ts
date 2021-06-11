import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App4DomainModule } from '@dev/app4/domain';
import { Comp3Component } from './comp3.component';

@NgModule({
  imports: [CommonModule, App4DomainModule],
  declarations: [Comp3Component],
  exports: [Comp3Component],
})
export class App4FeatureComp3Module {}

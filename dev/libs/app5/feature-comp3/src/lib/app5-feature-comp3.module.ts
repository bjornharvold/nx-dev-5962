import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App5DomainModule } from '@dev/app5/domain';
import { Comp3Component } from './comp3.component';

@NgModule({
  imports: [CommonModule, App5DomainModule],
  declarations: [Comp3Component],
  exports: [Comp3Component],
})
export class App5FeatureComp3Module {}

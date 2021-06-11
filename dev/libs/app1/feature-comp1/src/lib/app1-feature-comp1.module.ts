import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App1DomainModule } from '@dev/app1/domain';
import { Comp1Component } from './comp1.component';
import {SharedDomainModule} from '@dev/shared/domain';

@NgModule({
  imports: [CommonModule, App1DomainModule, SharedDomainModule],
  declarations: [Comp1Component],
  exports: [Comp1Component],
})
export class App1FeatureComp1Module {}

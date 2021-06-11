import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App3DomainModule } from '@dev/app3/domain';
import { Comp1Component } from './comp1.component';
import {SharedDomainModule} from '@dev/shared/domain';

@NgModule({
  imports: [CommonModule, App3DomainModule, SharedDomainModule],
  declarations: [Comp1Component],
  exports: [Comp1Component],
})
export class App3FeatureComp1Module {}

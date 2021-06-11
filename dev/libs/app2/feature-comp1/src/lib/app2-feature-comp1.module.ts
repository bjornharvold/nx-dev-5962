import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App2DomainModule } from '@dev/app2/domain';
import { Comp1Component } from './comp1.component';
import {SharedDomainModule} from '@dev/shared/domain';

@NgModule({
  imports: [CommonModule, App2DomainModule, SharedDomainModule],
  declarations: [Comp1Component],
  exports: [Comp1Component],
})
export class App2FeatureComp1Module {}

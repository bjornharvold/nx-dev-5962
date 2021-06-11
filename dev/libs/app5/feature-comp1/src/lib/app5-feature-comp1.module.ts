import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App5DomainModule } from '@dev/app5/domain';
import { Comp1Component } from './comp1.component';
import {SharedDomainModule} from '@dev/shared/domain';

@NgModule({
  imports: [CommonModule, App5DomainModule, SharedDomainModule],
  declarations: [Comp1Component],
  exports: [Comp1Component],
})
export class App5FeatureComp1Module {}

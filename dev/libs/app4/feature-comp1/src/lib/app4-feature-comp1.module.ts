import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { App4DomainModule } from '@dev/app4/domain';
import { Comp1Component } from './comp1.component';
import {SharedDomainModule} from '@dev/shared/domain';

@NgModule({
  imports: [CommonModule, App4DomainModule, SharedDomainModule],
  declarations: [Comp1Component],
  exports: [Comp1Component],
})
export class App4FeatureComp1Module {}

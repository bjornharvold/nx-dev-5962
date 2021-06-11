import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { App5FeatureComp1Module } from '@dev/app5/feature-comp1';
import { HttpClientModule } from '@angular/common/http';
import { App5FeatureComp2Module } from '@dev/app5/feature-comp2';
import { App5FeatureComp3Module } from '@dev/app5/feature-comp3';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, App5FeatureComp1Module, HttpClientModule, App5FeatureComp2Module, App5FeatureComp3Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

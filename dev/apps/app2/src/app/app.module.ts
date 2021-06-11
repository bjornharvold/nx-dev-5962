import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { App2FeatureComp1Module } from '@dev/app2/feature-comp1';
import { HttpClientModule } from '@angular/common/http';
import { App2FeatureComp2Module } from '@dev/app2/feature-comp2';
import { App2FeatureComp3Module } from '@dev/app2/feature-comp3';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, App2FeatureComp1Module, HttpClientModule, App2FeatureComp2Module, App2FeatureComp3Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

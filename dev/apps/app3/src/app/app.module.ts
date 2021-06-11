import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { App3FeatureComp1Module } from '@dev/app3/feature-comp1';
import { HttpClientModule } from '@angular/common/http';
import { App3FeatureComp2Module } from '@dev/app3/feature-comp2';
import { App3FeatureComp3Module } from '@dev/app3/feature-comp3';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, App3FeatureComp1Module, HttpClientModule, App3FeatureComp2Module, App3FeatureComp3Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

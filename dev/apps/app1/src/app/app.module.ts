import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { App1FeatureComp1Module } from '@dev/app1/feature-comp1';
import { HttpClientModule } from '@angular/common/http';
import { App1FeatureComp2Module } from '@dev/app1/feature-comp2';
import { App1FeatureComp3Module } from '@dev/app1/feature-comp3';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, App1FeatureComp1Module, HttpClientModule, App1FeatureComp2Module, App1FeatureComp3Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

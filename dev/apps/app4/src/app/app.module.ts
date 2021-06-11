import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { App4FeatureComp1Module } from '@dev/app4/feature-comp1';
import { HttpClientModule } from '@angular/common/http';
import { App4FeatureComp2Module } from '@dev/app4/feature-comp2';
import { App4FeatureComp3Module } from '@dev/app4/feature-comp3';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, App4FeatureComp1Module, HttpClientModule, App4FeatureComp2Module, App4FeatureComp3Module],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

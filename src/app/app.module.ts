import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyCesiumModule } from './my-cesium/my-cesium.module';

import { AngularCesiumModule, AngularCesiumWidgetsModule } from 'angular-cesium';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule,
    MyCesiumModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

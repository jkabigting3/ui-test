import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMapComponent } from './my-map/my-map.component';
import { MyBillboardComponent } from './my-billboard/my-billboard.component';

import { AngularCesiumModule, AngularCesiumWidgetsModule } from 'angular-cesium';

@NgModule({
  imports: [
    CommonModule,
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule
  ],
  declarations: [MyMapComponent, MyBillboardComponent],
  exports: [MyMapComponent, MyBillboardComponent]
})
export class MyCesiumModule { }

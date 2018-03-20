import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyMapComponent } from './my-map/my-map.component';
import { MyBillboardComponent } from './my-billboard/my-billboard.component';

import { AngularCesiumModule, AngularCesiumWidgetsModule } from 'angular-cesium';
import { MyLayerComponent } from './my-layer/my-layer.component';

@NgModule({
  imports: [
    CommonModule,
    AngularCesiumModule.forRoot(),
    AngularCesiumWidgetsModule
  ],
  declarations: [MyMapComponent, MyBillboardComponent, MyLayerComponent],
  exports: [MyMapComponent, MyBillboardComponent, MyLayerComponent]
})
export class MyCesiumModule { }

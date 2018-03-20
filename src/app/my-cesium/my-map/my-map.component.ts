import { Component, ViewChild } from '@angular/core';

import { AcMapComponent } from 'angular-cesium';
import { ViewerConfiguration } from 'angular-cesium/src/angular-cesium/services/viewer-configuration/viewer-configuration.service';

import { MyLayerComponent } from '../my-layer/my-layer.component';

@Component({
  selector: 'app-my-map',
  templateUrl: './my-map.component.html',
  styleUrls: ['./my-map.component.css'],
  providers: [ViewerConfiguration]
})
export class MyMapComponent {

  @ViewChild(AcMapComponent) acMap: AcMapComponent;
  @ViewChild('layer') myLayer: MyLayerComponent;

  constructor(private viewerConf: ViewerConfiguration) {
    console.log(viewerConf);
    viewerConf.viewerOptions = {
      animation: false,
      baseLayerPicker: false,
      fullscreenButton: false,
      geocoder: false,
      infoBox: false,
      navigationHelpButton: false,
      navigationInstructionsInitiallyVisible: false,
      timeline: false
    }

    viewerConf.viewerModifier = (viewer: any) => {
      viewer.bottomContainer.remove();
    }
  }

}

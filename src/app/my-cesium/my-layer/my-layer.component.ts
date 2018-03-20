import { Component, OnInit, ViewChild } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { CesiumService } from 'angular-cesium/src/angular-cesium/services/cesium/cesium.service';

import { AcLayerComponent } from 'angular-cesium';

@Component({
  selector: 'app-my-layer',
  templateUrl: './my-layer.component.html',
  providers: [CesiumService],
  styleUrls: ['./my-layer.component.css']
})
export class MyLayerComponent implements OnInit {

  @ViewChild(AcLayerComponent) layer: AcLayerComponent;
  layers: any;

  constructor(private cesium: CesiumService) {
    this.layers = Observable.from([{}]);
  }

  ngOnInit() {
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';

import { AcBillboardComponent } from 'angular-cesium';

@Component({
  selector: 'app-my-billboard',
  templateUrl: './my-billboard.component.html',
  styleUrls: ['./my-billboard.component.css']
})
export class MyBillboardComponent implements OnInit {

  @ViewChild(AcBillboardComponent) billboard: AcBillboardComponent;

  constructor() { }

  ngOnInit() {
  }

}

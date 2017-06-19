import { Component, OnInit, ElementRef } from '@angular/core';

import { AbstractArea } from '../../../magnolia-app/area/abstract.area';

@Component({
  selector: "[main-area]",
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent extends AbstractArea {}
import { Component, OnInit, ElementRef } from '@angular/core';

import { AbstractArea } from '../../../magnolia-app/area/abstract.area';

@Component({
  selector: "[schedule-area]",
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent extends AbstractArea {}
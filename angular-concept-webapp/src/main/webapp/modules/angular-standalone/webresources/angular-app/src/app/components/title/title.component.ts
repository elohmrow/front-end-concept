import { Component, OnInit, Input } from '@angular/core';

import { AbstractComponent } from '../../../magnolia-app/component/abstract.component';

@Component({
  selector: '[app-title]',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent extends AbstractComponent {}
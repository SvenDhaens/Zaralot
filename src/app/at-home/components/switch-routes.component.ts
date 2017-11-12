import {Component, Input, OnInit} from '@angular/core';
import {RouteInfo} from '../entities/route-info';

@Component({
  selector: 'zaralot-switch-routes',
  template: `
  <div class="row" *ngFor="let route of switchRoutes">
    <div class="col-1" [innerHTML]="route.port"></div>
    <div class="col-2" [innerHTML]="route.cableRef"></div>
    <div class="col-7" [innerHTML]="route.destination"></div>
  </div>`,
  styleUrls: []
})
export class SwitchRoutesComponent implements OnInit {
  @Input()
  switchRoutes: Array<RouteInfo>;

  constructor() {
  }

  ngOnInit() {
  }
}

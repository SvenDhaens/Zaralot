import { Component, OnInit } from '@angular/core';
import {AtHomeSandboxService} from '../../sandboxes/at-home-sandbox.service';

@Component({
  selector: 'zaralot-switch-overview',
  template: `
  <zaralot-switch-routes [switchRoutes]="switchRoutes$ |async"></zaralot-switch-routes>
`,
  styleUrls: []
})
export class SwitchOverviewComponent implements OnInit {

  switchRoutes$ = this.sb.getRoutes();

  constructor(private sb: AtHomeSandboxService) { }

  ngOnInit() {
  }

}

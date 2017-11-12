import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {RouteInfo} from '../../entities/route-info';
import {AtHomeSandboxService} from '../../sandboxes/at-home-sandbox.service';

@Component({
  selector: 'zaralot-home-container',
  template: `
    <img src="assets/images/zaralot.png"/>
    <zaralot-nav-bar></zaralot-nav-bar>
    <div  style="width: 80%; margin:auto;border:1px solid red">
      <router-outlet></router-outlet>
    </div>
`,
  styleUrls: []
})
export class AtHomeContainer implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

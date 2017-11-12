import {Component, Input, OnInit} from '@angular/core';
import {CuServerInfo} from '../entities/cu-server-info';
import {CuServersService} from '../services/cu-servers.service';

@Component({
  selector: 'zaralot-cu-servers',
  template: `
<section class="section">
  <div class="container">
    <ng-container *ngFor="let item of cuServersInfo">
      <zaralot-server-card [serverInfo]="item"></zaralot-server-card>
    </ng-container>

    <h2>Here are some links to help you start: </h2>
    <ul>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://angular.io/tutorial">Tour of Heroes</a></h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://github.com/angular/angular-cli/wiki">CLI Documentation</a>
        </h2>
      </li>
      <li>
        <h2><a target="_blank" rel="noopener" href="https://blog.angular.io/">Angular blog</a></h2>
      </li>
    </ul>
  </div>
</section>
`,
  styleUrls: []
})
export class CuServersComponent implements OnInit {
  @Input()
  cuServersInfo: Array<CuServerInfo>;

  constructor() { }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {CuServerInfo} from '../entities/cu-server-info';
import {CuServersService} from '../services/cu-servers.service';

@Component({
  selector: 'zaralot-camelot-container',
  template: `
<img src="assets/images/zaralot.png"/>
<zaralot-nav-bar></zaralot-nav-bar>
<section class="section">
  <h1 class="title ">
    Welcome to <span [innerHTML]="title"></span>!
  </h1>
  <h2 class="subtitle is-primary">
    A page were you can find some usefull info!
  </h2>
</section>
<zaralot-cu-servers [cuServersInfo]="cuServersInfo$ | async"></zaralot-cu-servers>
<zaralot-footer></zaralot-footer>
`,
  styleUrls: []
})
export class CamelotContainer implements OnInit {
  cuServersInfo$: Observable<Array<CuServerInfo>>
  title = "Zaralot"

  constructor(private cuServerService: CuServersService) {
  }

  ngOnInit() {
    this.cuServersInfo$ = this.cuServerService.getCuServerInfo();
  }
}

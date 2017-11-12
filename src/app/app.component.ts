import { Component } from '@angular/core';
import {CuServersService} from './zaralot/services/cu-servers.service';
import {CuServerInfo} from './zaralot/entities/cu-server-info';

@Component({
  selector: 'zaralot-root',
  template: `
<router-outlet></router-outlet>
`,
  styleUrls: []
})
export class AppComponent {
  title = 'Zaralot';


  constructor() {
  }
}

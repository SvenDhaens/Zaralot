import {Component} from '@angular/core';

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

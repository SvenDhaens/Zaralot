import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'zaralot-page-not-found',
  template: `
<img src="assets/images/zaralot.png"/>
<zaralot-nav-bar></zaralot-nav-bar>
<h1>Page Not Found!</h1>
`,
  styles: []
})
export class PageNotFoundContainer implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}

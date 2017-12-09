import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'zaralot-nav-bar',
  template: `
<nav >
  <ul class="nav justify-content-center">
    <li class="nav-item" *ngFor="let link of navLinks">
      <a class="nav-link active" [routerLink]="link.route" [innerHtml]="link.name" [routerLinkActive]="link.status"></a>
    </li>
  </ul>
</nav>
`,
  styles: [`.nav{ border:1px solid red;}`] // position :fixed; z-index:100
})
export class NavComponent implements OnInit {
  navLinks = [{
    route: '',
    name: 'Home',
    status: 'active'
  }, {
    route: '/at-home/form',
    name: '@-home.form',
    status: 'active'
  }, {
    route: '/at-home',
    name: '@-home',
    status: 'active'
  }];

  constructor() {
  }

  ngOnInit() {
  }

}

import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'zaralot-nav-bar',
  template: `
  <nav >
  <ul class="nav justify-content-center">
    <li class="nav-item" *ngFor="let link of navLinks">
      <a class="nav-link active" [href]="link.url" [innerHtml]="link.name" [class.disabled]="link.disabled"></a>
    </li>
  </ul>
</nav>
`,
  styles: [`.nav{ border:1px solid red;}`] // position :fixed; z-index:100
})
export class NavComponent implements OnInit {
  navLinks = [{
    url: '#',
    name: 'Home',
  }, {
    url: '/at-home/form',
    name: '@-home.form'
  }, {
    url: '/at-home',
    name: '@-home'
  }, {
    url: '#',
    name: 'Disabled',
    disabled: true
  }];

  constructor() {
  }

  ngOnInit() {
  }

}

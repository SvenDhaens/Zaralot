import {Component, Input, OnInit} from '@angular/core';
import {CuServerInfo} from '../entities/cu-server-info';

@Component({
  selector: 'zaralot-server-card',
  template: `
  <div class="card" style="width: 15rem;">
  <h4 class="card-header" [ngClass]="serverInfo.status==2 ? 'bg-success' : 'bg-danger'" [innerHtml]="serverInfo.name">

  </h4>
  <img class="card-img-top" src="assets/images/zaralot.png" alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title" [innerHtml]="serverInfo.name"></h5>
    <p class="card-text">Acces Level: <span [innerHtml]="getAccesLevelAsString()"></span></p>
    <a href="#" class="btn btn-primary text-sm-right ">Go somewhere</a>
  </div>
</div>
`,
  styles: [`.card{
  text-align: center;
  display:inline-block;
}`]
})
export class ServerCardComponent implements OnInit {

  @Input()
  serverInfo: CuServerInfo;

  ngOnInit() {
  }

  getAccesLevelAsString(): string {
    switch (this.serverInfo.accessLevel) {
      case 4: {
        return 'Alpha + IT';
      }
      case 5: {
        return 'IT only';
      }
      case 6: {
        return 'CSE only';
      }
      default: {
        return 'undefined';
      }
    }
  }
}

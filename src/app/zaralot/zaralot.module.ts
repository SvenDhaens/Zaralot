import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ServerCardComponent} from './components/server-card.component';
import {HttpClientModule} from '@angular/common/http';
import {CuServersService} from './services/cu-servers.service';
import {CuServersComponent} from './components/cu-servers.component';
import {CamelotContainer} from './containers/camelot/camelot-container';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ZaralotCommonModule} from '../common/zaralot.common.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    NgbModule,
    ZaralotCommonModule,
    RouterModule
  ],
  providers: [CuServersService],
  declarations: [ServerCardComponent, CuServersComponent, CamelotContainer],
  exports: [ServerCardComponent, CamelotContainer]
})
export class ZaralotModule {
}

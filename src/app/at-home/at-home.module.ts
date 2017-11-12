import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AtHomeContainer} from './containers/at-home/at-home-container';
import {SwitchRoutesComponent} from './components/switch-routes.component';
import {SwitchRoutesService} from './services/switch-routes.service';
import {SwitchOverviewComponent} from './containers/switch-overview/switch-overview.component';
import {AtHomeSandboxService} from './sandboxes/at-home-sandbox.service';
import {SwitchFormComponent} from './containers/switch-form/switch-form.component';
import {routing} from './routes';
import {FormBuilder, ReactiveFormsModule} from '@angular/forms';
import { SwitchRouteInputComponent } from './components/switch-route-input/switch-route-input.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ZaralotCommonModule} from '../common/zaralot.common.module';


@NgModule({
  imports: [
    CommonModule,
    ZaralotCommonModule,
    ReactiveFormsModule,
    routing,
    NgbModule
  ],
  declarations: [AtHomeContainer, SwitchRoutesComponent, SwitchOverviewComponent, SwitchFormComponent, SwitchRouteInputComponent],
  providers: [SwitchRoutesService, AtHomeSandboxService, FormBuilder],
  exports: []
})
export class AtHomeModule {
}

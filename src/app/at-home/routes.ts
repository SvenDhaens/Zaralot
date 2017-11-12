import {RouterModule, Routes} from '@angular/router';
import {SwitchOverviewComponent} from './containers/switch-overview/switch-overview.component';
import {AtHomeContainer} from './containers/at-home/at-home-container';
import {SwitchFormComponent} from './containers/switch-form/switch-form.component';
/**
 * Created by Zaraul on 25/10/2017.
 */
const routes: Routes = [
  {
    path: '', component: AtHomeContainer, children: [
    {path: '', pathMatch: 'full', redirectTo: 'overview'},
    {path: 'overview', component: SwitchOverviewComponent},
    {path: 'form', component: SwitchFormComponent}
  ]
  },
];
export const routing = RouterModule.forChild(routes);




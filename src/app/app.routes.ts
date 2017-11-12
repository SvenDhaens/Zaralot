import {RouterModule, Routes} from '@angular/router';
import {CamelotContainer} from './zaralot/containers/camelot-container';
import {AtHomeContainer} from './at-home/containers/at-home/at-home-container';
/**
 * Created by Zaraul on 23/10/2017.
 */

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'zaralot'},
  {path: 'at-home', loadChildren: 'app/at-home/at-home.module#AtHomeModule'},
  {path: 'zaralot', component: CamelotContainer}];

export const routing = RouterModule.forRoot(routes);

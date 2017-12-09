import {RouterModule, Routes} from '@angular/router';
import {CamelotContainer} from './zaralot/containers/camelot/camelot-container';
import {PageNotFoundContainer} from './common/containers/page-not-found/page-not-found.component';
/**
 * Created by Zaraul on 23/10/2017.
 */

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'zaralot'},
  {path: 'at-home', loadChildren: 'app/at-home/at-home.module#AtHomeModule'},
  {path: 'zaralot', component: CamelotContainer},
  {path: '**', component: PageNotFoundContainer}/*make & replace component > for Page not found*/];

export const routing = RouterModule.forRoot(routes);

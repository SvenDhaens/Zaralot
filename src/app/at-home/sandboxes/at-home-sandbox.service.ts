import {Injectable} from '@angular/core';
import {SwitchRoutesService} from '../services/switch-routes.service';
import {Observable} from 'rxjs/Observable';
import {RouteInfo} from '../entities/route-info';

@Injectable()
export class AtHomeSandboxService {
  switchRoutes;

  constructor(private switchRouteService: SwitchRoutesService) {
  }

  getRoutes(): Observable<RouteInfo[]> {
    return Observable.of(this.switchRouteService.getSwitchRoutes());
  }
}

/**
 * Created by SVENDHAENS on 12/11/2017.
 */
import {RouteInfo} from '../../at-home/entities/route-info';
import {Action} from '@ngrx/store';
import {type} from '../utils';

const ActionTypes = {
  ADD_SWITCH_ROUTE: type('ADD_SWITCH_ROUTE') as 'ADD_SWITCH_ROUTE'
};

export class AddSwitchRoute implements Action {
  readonly type = ActionTypes.ADD_SWITCH_ROUTE;

  constructor(public payload: { routeinfo: RouteInfo }) {
  }
}

type Actions = AddSwitchRoute;

export function switchRouteReducer(state: Array<RouteInfo> = [], action: Actions): Array<RouteInfo> {
  switch (action.type) {
    case ActionTypes.ADD_SWITCH_ROUTE:
      return [...state, action.payload.routeinfo]
    default:
      return state;
  }
}

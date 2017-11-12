import {RouteInfo} from '../at-home/entities/route-info';
import {InjectionToken} from '@angular/core';
import {ActionReducerMap, combineReducers} from '@ngrx/store';
import {switchRouteReducer} from './data/switch-routes';
import {switchSortingReducer} from './ui/switch-sort';
export type ApplicationState = Readonly<{
  data: {
    switchRoutes: Array<RouteInfo>;
  };
  ui: {
    switchSort: { columnName?: string, direction?: 'ASC' | 'DESC' }
  };
}>;

export const reducerToken = new InjectionToken<ActionReducerMap<ApplicationState>>('Reducers');

const dataReducers = combineReducers({
  switchRoutes: switchRouteReducer
});

const uiReducers = combineReducers({
  switchSort: switchSortingReducer
});

export const rootReducer: ActionReducerMap<ApplicationState> = {
  data: dataReducers,
  ui: uiReducers,
};

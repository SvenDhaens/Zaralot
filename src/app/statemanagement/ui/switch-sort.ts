import {type} from '../utils';
import {Action} from '@ngrx/store';
/**
 * Created by SVENDHAENS on 12/11/2017.
 */

const ActionTypes = {
  SET_SORTING: type('SET_SORTING') as 'SET_SORTING'
};

class SetSwitchSorting implements Action {
  readonly type = ActionTypes.SET_SORTING;

  constructor(public payload: { columnName: string, direction: 'ASC' | 'DESC' }) {
  }
}

type Actions = SetSwitchSorting;

export function switchSortingReducer(state: { columnName?: string, direction?: 'ASC' | 'DESC' } = {}, action: Actions): { columnName?: string, direction?: 'ASC' | 'DESC' } {
  switch (action.type) {
    case ActionTypes.SET_SORTING:
      if (state && state.columnName && state.columnName === action.payload.columnName) {
        return {...state, direction: state.direction === 'ASC' ? 'DESC' : 'ASC'};
      } else {
        return {...action.payload, direction: 'ASC'};
      }
    default:
      return state;
  }
}

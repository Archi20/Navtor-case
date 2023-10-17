import { createReducer, on } from '@ngrx/store';
import {
  loadData,
  loadDataFailure,
  loadDataSuccess,
} from './vessel-data.actions';

export const initialState = [];

export const vesselDataReducer = createReducer(
  initialState,
  on(loadData, (state) => state),
  on(loadDataSuccess, (state, { vessels }) => ({ ...state, vessels })),
  on(loadDataFailure, (state, { error }) => ({ ...state, error }))
);

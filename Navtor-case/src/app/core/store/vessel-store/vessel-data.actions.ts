import { createAction, props } from '@ngrx/store';
import { Vessel } from '../../models/vessel.model';

const LOAD_VESSELS = '[Vessels Page] Load Vessels';
const LOAD_VESSELS_SUCCESS = '[Vessels Page] Load Vessels Success';
const LOAD_VESSELS_FAIL = '[Vessels Page] Load Vessels Fail';

export const loadData = createAction(LOAD_VESSELS);
export const loadDataSuccess = createAction(
  LOAD_VESSELS_SUCCESS,
  props<{ vessels: Vessel[] }>()
);
export const loadDataFailure = createAction(
  LOAD_VESSELS_FAIL,
  props<{ error: any }>()
);

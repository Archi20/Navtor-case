import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Vessel } from '../../models/vessel.model';

export interface RootState {
  vesselStore: VesselState;
}

export interface VesselState {
  vessels: Vessel[];
}

export const selectVesselState = createFeatureSelector<VesselState>('vesselStore');

export const selectVessels = createSelector(
  selectVesselState,
  (vesselState: VesselState) => vesselState.vessels
);

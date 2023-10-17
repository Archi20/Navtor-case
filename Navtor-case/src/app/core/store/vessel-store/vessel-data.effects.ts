import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { VesselDataService } from '../../service/vessel-data.service';
import * as vesselDataActions from './vessel-data.actions';

@Injectable()
export class VesselDataEffects {

  loadVessels$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Vessels Page] Load Vessels'),
      mergeMap(() =>
        this.vesselDataService.get().pipe(
          map((vessels) => vesselDataActions.loadDataSuccess({vessels})),
          catchError((err) => EMPTY)
        )
      )
    )
  );

  

  constructor(
    private actions$: Actions,
    private vesselDataService: VesselDataService
  ) {}
}

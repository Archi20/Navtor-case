import { Component } from '@angular/core';
import { Vessel } from '../../../../core/models/vessel.model';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as vesselDataActions from 'src/app/core/store/vessel-store/vessel-data.actions';
import { selectVessels } from 'src/app/core/store/vessel-store/vessel-data.selectors';

@Component({
  selector: 'vessel',
  templateUrl: './vessel.component.html',
  styleUrls: ['./vessel.component.css'],
})
export class VesselComponent {
  vessels$: Observable<Vessel[]> = this.store.select(selectVessels);

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(vesselDataActions.loadData());
  }
}

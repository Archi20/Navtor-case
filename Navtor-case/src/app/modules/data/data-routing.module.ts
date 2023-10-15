import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VesselComponent } from './components/vessel/vessel.component';
import { EmissionsComponent } from './components/emissions/emissions.component';

const routes: Routes = [
  { path: '', redirectTo: '/vessel', pathMatch: 'full' },
  { path: 'vessel', component: VesselComponent },
  { path: 'emmisions', component: EmissionsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataRoutingModule {}

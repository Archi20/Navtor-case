import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VesselComponent } from './components/vessel/vessel.component';
import { EmissionsComponent } from './components/emissions/emissions.component';
import { DataRoutingModule } from './data-routing.module';



@NgModule({
  declarations: [
    VesselComponent,
    EmissionsComponent
  ],
  imports: [
    DataRoutingModule,
    CommonModule
  ]
})
export class DataModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VesselComponent } from './components/vessel/vessel.component';
import { EmissionsComponent } from './components/emissions/emissions.component';
import { DataRoutingModule } from './data-routing.module';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { HighchartsChartModule } from 'highcharts-angular';
import { CommentsComponent } from './components/comments/comments.component';
import { vesselDataReducer } from 'src/app/core/store/vessel-store/vessel-data.reducer';



@NgModule({
  declarations: [
    VesselComponent,
    EmissionsComponent,
    CommentsComponent
  ],
  imports: [
    DataRoutingModule,
    StoreModule.forFeature('vesselStore', vesselDataReducer),
    CommonModule,
    FormsModule,
    CardModule,
    TableModule,
    DropdownModule,
    HighchartsChartModule
  ]
})
export class DataModule { }

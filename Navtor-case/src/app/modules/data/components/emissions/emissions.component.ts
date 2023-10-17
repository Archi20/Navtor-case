import { Component } from '@angular/core';
import { Emission } from 'src/app/core/models/emissions.model';
import { EmissionsService } from 'src/app/core/service/emissions-data.service';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-emissions',
  templateUrl: './emissions.component.html',
  styleUrls: ['./emissions.component.css'],
})
export class EmissionsComponent {
  emission: Emission[] = [];
  data: any;
  chartRef: any;
  updateFlag = true;
  selectedVessel: any = {};

  // Ids should be get from vessels or additional call to service,
  // It could be get from current vessels, but this solution increase complexity of exerice
  selectOptions: any = [
    { id: 10001, name: 'MS 1' },
    { id: 10002, name: 'MS 2' },
    { id: 10003, name: 'MS 3' },
  ];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {
    series: [
      {
        type: 'line',
        data: [],
      },
    ],
  };

  handeUpdate(dataArray: any[]) {
    this.chartRef.series[0].update({ // Update should Depends on EmmissionType 
      data: dataArray,
      type: 'line',
    });
  }

  constructor(private readonly emissionsService: EmissionsService) {}

  ngOnInit(): void {
    this.getEmmisionData();
  }

  getEmmisionData() {
    this.emissionsService.get(this.selectedVessel.id).subscribe({
      next: (data) => {
        this.emission = data;
        this.handeUpdate(this.prepareChartData('ch4_emissions')); // Selected first data stack, but buissines logich should should be specified what should be displayed
      },
      error: (error) => {
        console.log(error); // Should be redirection do error page or some information of data problems.
      },
    });
  }

  chartCallback: Highcharts.ChartCallbackFunction = (chart) => {
    this.chartRef = chart;
  };

  prepareChartData(emmisionType: string): any[] {
    return this.emission.map((element: Emission) => {
      return element[emmisionType as keyof Emission]; 
    });
  }
}

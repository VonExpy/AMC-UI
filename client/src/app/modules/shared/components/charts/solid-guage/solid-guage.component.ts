import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartType, RadialChartOptions } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-solid-guage',
  templateUrl: './solid-guage.component.html',
  styleUrls: ['./solid-guage.component.scss']
})
export class SolidGuageComponent implements OnInit {
    // Radar
    public radarChartOptions: RadialChartOptions = {
      responsive: false,
    };
    public radarChartLabels: Label[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];
  
    public radarChartData: ChartDataSets[] = [
      { data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A' },
      { data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B' }
    ];
    public radarChartType: ChartType = 'radar';

  constructor() { }

  ngOnInit(): void {
  }

}
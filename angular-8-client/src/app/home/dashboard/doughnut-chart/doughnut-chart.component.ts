import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { DashboardData } from '../dashboard/dashboard.component';
@Component({
  selector: 'app-dashboard-doughnut-chart',
  templateUrl: './doughnut-chart.component.html',
  styleUrls: ['./doughnut-chart.component.scss'],
})
export class DoughnutChartComponent implements OnInit {
  constructor() {}
  @Input() doughnutChartDataFromApiCounts = new Array();
  @Input() doughnutChartDataFromApiLabel = new Array();
  doughnutChartLegend = false;
  doughnutChartLabels: Label[] = new DashboardData()
    .doughnutChartDataFromApiLabel;
  doughnutChartColors: any[] = [
    {
      backgroundColor: ['#67CA57', '#1371EE'],
    },
  ];
  chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
  };
  public doughnutChartType: ChartType = 'doughnut';
  ngOnInit(): void {}
}

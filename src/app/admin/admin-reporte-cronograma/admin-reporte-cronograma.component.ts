import {Component, OnDestroy, OnInit} from '@angular/core';
import {AmChart, AmChartsService} from '@amcharts/amcharts3-angular';
import {ReportesService} from '../../services/reportes/reportes.service';

declare var $: any;
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-reporte-cronograma',
  templateUrl: './admin-reporte-cronograma.component.html',
  styleUrls: ['./admin-reporte-cronograma.component.css']
})
export class AdminReporteCronogramaComponent implements OnInit, OnDestroy {
  private chart: AmChart;
  constructor(private reporAAService: ReportesService,
              private AmCharts: AmChartsService) { }
  id: number;
  data: any[];
  datos: any = [];
  ngOnInit() {
    AdminLTE.init();
    this.reporAAService.getReporCR().subscribe(data => {
      this.data = data.reporcr;
      console.log('inscrip', this.data);
      this.chart = this.AmCharts.makeChart( 'chartdiv', {
        'type': 'gantt',
        'theme': 'light',
        'marginRight': 70,
        'period': 'DD',
        'dataDateFormat': 'YYYY-MM-DD',
        'columnWidth': 0.5,
        'valueAxis': {
          'type': 'date'
        },
        'brightnessStep': 7,
        'graph': {
          'fillAlphas': 1,
          'lineAlpha': 1,
          'lineColor': '#fff',
          'balloonText': '<b>[[task]]</b>:<br />[[open]] -- [[value]]'
        },
        'rotate': true,
        'categoryField': 'category',
        'segmentsField': 'this.data',
        'colorField': 'color',
        'startDateField': 'start',
        'endDateField': 'end',
        'dataProvider': this.data,
        'valueScrollbar': {
          'autoGridCount': true
        },
        'chartCursor': {
          'cursorColor': '#55bb76',
          'valueBalloonsEnabled': false,
          'cursorAlpha': 0,
          'valueLineAlpha': 0.5,
          'valueLineBalloonEnabled': true,
          'valueLineEnabled': true,
          'zoomable': false,
          'valueZoomable': true
        },
        'export': {
          'enabled': true
        }
      } );
    });
  }
  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
}

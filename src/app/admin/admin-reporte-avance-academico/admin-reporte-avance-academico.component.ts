import {Component, OnDestroy, OnInit} from '@angular/core';
import {AmChart, AmChartsService} from '@amcharts/amcharts3-angular';
import {ReportesService} from '../../services/reportes/reportes.service';

declare var $: any;
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-reporte-avance-academico',
  templateUrl: './admin-reporte-avance-academico.component.html',
  styleUrls: ['./admin-reporte-avance-academico.component.css']
})
export class AdminReporteAvanceAcademicoComponent implements OnInit, OnDestroy {
  private chart: AmChart;
  constructor(private reporAAService: ReportesService, private AmCharts: AmChartsService) { }
  id: number;
  data: any[];
  ngOnInit() {
    AdminLTE.init();
    this.reporAAService.getReporAA().subscribe(data => {
      this.data = data.reporaa;
      console.log(this.data);
      this.chart = this.AmCharts.makeChart('chartdiv', {
        'type': 'pie',
        'startDuration': 0,
        'theme': 'light',
        'addClassNames': true,
        'legend': {
          'position': 'right',
          'marginRight': 100,
          'autoMargins': false
        },
        'innerRadius': '30%',
        'defs': {
          'filter': [{
            'id': 'shadow',
            'width': '200%',
            'height': '200%',
            'feOffset': {
              'result': 'offOut',
              'in': 'SourceAlpha',
              'dx': 0,
              'dy': 0
            },
            'feGaussianBlur': {
              'result': 'blurOut',
              'in': 'offOut',
              'stdDeviation': 5
            },
            'feBlend': {
              'in': 'SourceGraphic',
              'in2': 'blurOut',
              'mode': 'normal'
            }
          }]
        },
        'dataProvider': this.data,
        'valueField': 10,
        'titleField': 'nombre',
      });
      this.chart.addListener('init', handleInit);

      this.chart.addListener('rollOverSlice', function(e) {
        handleRollOver(e);
      });

      function handleInit() {
        this.chart.legend.addListener('rollOverItem', handleRollOver);
      }

      function handleRollOver(e) {
        const wedge = e.dataItem.wedge.node;
        wedge.parentNode.appendChild(wedge);
      }
    });
  }
  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
}

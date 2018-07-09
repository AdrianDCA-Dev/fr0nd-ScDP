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
  dataIns: any[];
  datos: any = [];
  ngOnInit() {
    AdminLTE.init();
    this.reporAAService.getInscripReport().subscribe(data => {
      this.dataIns = data.inscrip;
      console.log('inscrip', this.dataIns);
    });
  }
  mostrarReporte(model: any) {
    this.reporAAService.getReporAA(model.id).subscribe(data => {
      this.data = data.reporaa;
      console.log('repo', this.data);
      console.log('color', this.getRandomColor());
      this.datos = [];
      for (let i = 0; i < this.data.length; i++) {

         this.datos.push({
           'color': this.getRandomColor(),
           'name': this.data[i].nombre,
           'estado': this.data[i].estado,
           'points': 65456,
           'bullet': 'http://icongal.com/gallery/image/38466/reports.png'
         });
      }
      this.chart = this.AmCharts.makeChart('chartdiv', {
        'type': 'serial',
        'theme': 'light',
        'dataProvider': this.datos,
        'valueAxes': [{
          'maximum': 80000,
          'minimum': 0,
          'axisAlpha': 0,
          'dashLength': 4,
          'position': 'left'
        }],
        'startDuration': 1,
        'graphs': [{
          'balloonText': '<span style=\'font-size:13px;\'>[[title]]: <b>[[category]]</b></span>',
          'bulletOffset': 10,
          'bulletSize': 52,
          'colorField': 'color',
          'cornerRadiusTop': 8,
          'customBulletField': 'bullet',
          'fillAlphas': 0.8,
          'lineAlpha': 0,
          'type': 'column',
          'title': 'Estado',
          'valueField': 'points',
        }],
        'marginTop': 0,
        'marginRight': 0,
        'marginLeft': 0,
        'marginBottom': 0,
        'autoMargins': false,
        'categoryField': 'estado',
        'categoryAxis': {
          'axisAlpha': 0,
          'gridAlpha': 0,
          'inside': true,
          'tickLength': 0
        },
        'export': {
          'enabled': true
        }
      });
    });
  }
  getRandomColor() {
    const color = Math.floor(0x1000000 * Math.random()).toString(16);
    return '#' + ('000000' + color).slice(-6);
  }
  ngOnDestroy() {
    if (this.chart) {
      this.AmCharts.destroyChart(this.chart);
    }
  }
}

import { Component, OnInit } from '@angular/core';
import * as j from 'jquery';
import 'jqueryui';
import 'fullcalendar';
import * as moment from 'moment';
import {CronogramaService} from '../../services/cronograma/cronograma.service';

declare var $: any;
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-visualizar-cronograma-actividades',
  templateUrl: './admin-visualizar-cronograma-actividades.component.html',
  styleUrls: ['./admin-visualizar-cronograma-actividades.component.css']
})
export class AdminVisualizarCronogramaActividadesComponent implements OnInit {
  data: any[];
  constructor(private cronoService: CronogramaService) { }

  ngOnInit() {
    AdminLTE.init();
    this.cronoService.getCronAct().subscribe(data => {
      this.data = data.cronoAct;
      //console.log('start', moment(data.cronoAct.start).format());
      console.log('calendario', data);
      j('#calendar').fullCalendar({
        header    : {
          left  : 'prev,next today',
          center: 'title',
          right : 'month,agendaWeek,agendaDay'
        },
        buttonText: {
          today: 'hoy',
          month: 'mes',
          week : 'semana',
          day  : 'día',
        },
        dayClick: function(date, jsEvent, view){
          Limpiar();
          j('#txtFecha').val(date.format());
          $('#modalEventos').modal('show');
        },
        events: data.cronoAct,
        eventClick: function (calEvent, jsEvent, view) {
          console.log('llamando');
          j('#txtId').val(calEvent.id);
          j('#tituloEvento').html(calEvent.title);
          j('#txtDescripcion').val(calEvent.descripcion);
          j('#txtColor').val(calEvent.color);
          /*const FechaHora = calEvent.start._i.split(' ');
          j('#txtFecha').val(FechaHora[0]);
          j('#txtHora').val(FechaHora[1]);*/
          const TituloHora = calEvent.title.split('.');
          j('#txtFecha').val(moment(calEvent.start).format());
          j('#txtHora').val(TituloHora[0]);
          j('#txtTitulo').val(TituloHora[1]);
          $('#modalEventos').modal('show');
        }
      });
    });
    function Limpiar() {
      j('#txtId').val(' ');
      j('#txtHora').val(' ');
      j('#txtTitulo').val(' ');
      j('#txtColor').val(' ');
      j('#txtDescripcion').val(' ');
    }
  }

}

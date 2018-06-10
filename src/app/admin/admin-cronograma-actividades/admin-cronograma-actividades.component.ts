import {Component, OnInit, ViewChild} from '@angular/core';
import { CalendarComponent } from 'ng-fullcalendar';
import {EventService} from '../../services/event/event.service';
//import { Options } from 'fullcalendar';
import * as j from 'jquery';
import 'jqueryui';
import 'fullcalendar';
//import 'moment';
import * as moment from 'moment';
import 'moment/locale/pt-br';
import {CronogramaService} from '../../services/cronograma/cronograma.service';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../environments/environment';

declare var $: any;
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-cronograma-actividades',
  templateUrl: './admin-cronograma-actividades.component.html',
  styleUrls: ['./admin-cronograma-actividades.component.css']
})
export class AdminCronogramaActividadesComponent implements OnInit {
  public myForm: FormGroup;
  public editForm: FormGroup;

  //calendarOptions: Options;
  displayEvent: any;
  logger: any[] = [];
  events: any[];
  data: any[];
  //@ViewChild(CalendarComponent) ucCalendar: CalendarComponent;
  constructor(protected cronoService: CronogramaService, protected fb: FormBuilder) { }

  ngOnInit() {
    let cro = this.cronoService;
    AdminLTE.init();
    this.myForm = this.fb.group({
      id: [null, Validators.required],
      title: [null, Validators.required],
      descripcion: [null, Validators.required],
      color: [null, Validators.required],
      textColor: [null, Validators.required],
      start: [null, Validators.required],
      end: [null, Validators.required],
      fecha: [null, Validators.required],
      hora: [null, Validators.required],
    });
    this.editForm = this.fb.group({
      id: [null, Validators.required],
      title: [null, Validators.required],
      descripcion: [null, Validators.required],
      color: [null, Validators.required],
      textColor: [null, Validators.required],
      start: [null, Validators.required],
      end: [null, Validators.required],
    });
    this.cronoService.getCronAct().subscribe(data => {
      this.data = data.cronoAct;
      //console.log('start', moment(data.cronoAct.start).format());
      console.log('calendario', data);
    /*function init_events(ele) {
      ele.each(function () {

        // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
        // it doesn't need to have a start or end
        var eventObject = {
          title: $.trim($(this).text()) // use the element's text as the event title
        }

        // store the Event Object in the DOM element so we can get to it later
        $(this).data('eventObject', eventObject)

        // make the event draggable using jQuery UI
        $(this).draggable({
          zIndex        : 1070,
          revert        : true, // will cause the event to go back to its
          revertDuration: 0  //  original position after the drag
        });

      });
    }
    init_events($('#external-events div.external-event'))

    this.eventService.getEvents().subscribe(data => {
      var date = moment(new Date());
      var d    = date.date(),
        m    = date.month(),
        y    = date.year();
      $('#calendar').fullCalendar({
        /!*header: {
          left: 'prev,next today',
          center: 'title',
          right: 'month,agendaWeek,agendaDay,listMonth'
        },*!/
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
        editable: true,
        //events: data,

        droppable : true, // this allows things to be dropped onto the calendar !!!
        drop      : function (date, allDay) { // this function is called when something is dropped

          // retrieve the dropped element's stored Event Object
          const originalEventObject = $(this).data('eventObject')

          // we need to copy it, so that multiple events don't have a reference to the same object
          const copiedEventObject = $.extend({}, originalEventObject)

          // assign it the date that was reported
          copiedEventObject.start           = date
          copiedEventObject.allDay          = allDay
          copiedEventObject.backgroundColor = $(this).css('background-color')
          copiedEventObject.borderColor     = $(this).css('border-color')
          // render the event on the calendar
          // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
          $('#calendar').fullCalendar('renderEvent', copiedEventObject, true)
          // is the "remove after drop" checkbox checked?
          if ($('#drop-remove').is(':checked')) {
            // if so, remove the element from the "Draggable Events" list
            $(this).remove();
          }

        }
      });
      /!* ADDING EVENTS *!/
      var currColor = '#3c8dbc'; //Red by default
      //Color chooser button
      const colorChooser = $('#color-chooser-btn')
      $('#color-chooser > li > a').click(function (e) {
        e.preventDefault()
        //Save color
        currColor = $(this).css('color')
        //Add color effect to button
        $('#add-new-event').css({ 'background-color': currColor, 'border-color': currColor })
      })
      $('#add-new-event').click(function (e) {
        e.preventDefault()
        //Get value and make sure it is not null
        var val;
        val  = $('#new-event').val()
        if (val.length == 0) {
          return;
        }

        //Create events
        var event = $('<div />')
        event.css({
          'background-color': currColor,
          'border-color'    : currColor,
          'color'           : '#fff'
        }).addClass('external-event')
        event.html(val)
        $('#external-events').prepend(event)

        //Add draggable funtionality
        init_events(event)

        //Remove event from text input
        $('#new-event').val('');
      });
    });*/
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

    var NuevoEvento;
    j('#btnAgregar').click(function () {
      RecolectarDatosGUI();
     /* j('#calendar').fullCalendar('renderEvent', NuevoEvento, true);*/
      console.log('enviado', NuevoEvento);
      EnviarDatos(NuevoEvento);

    });
    j('#btnEliminar').click(function () {
      RecolectarDatosGUI();
      /* j('#calendar').fullCalendar('renderEvent', NuevoEvento, true);*/
      console.log('eliminar', NuevoEvento.id);
      EliminarDatos(NuevoEvento);
    });
    j('#btnModificar').click(function () {
      RecolectarDatosGUI();
      /* j('#calendar').fullCalendar('renderEvent', NuevoEvento, true);*/
      console.log('eliminar', NuevoEvento.id);
      ModificarDatos(NuevoEvento);
    });
    function RecolectarDatosGUI() {
      NuevoEvento = {
        id: j('#txtId').val(),
        start: j('#txtFecha').val(),
        title: j('#txtHora').val() + '.' + ' ' + j('#txtTitulo').val(),
        color: j('#txtColor').val(),
        descripcion: j('#txtDescripcion').val(),
        textColor: '#FFFFFF',
        end: j('#txtFecha').val(),
      };
    }
    function EnviarDatos(model) {
      console.log('enviarsi', model);
      cro.postCronoAct(model).subscribe(data => {
        console.log('entro', data);
        j('#calendar').fullCalendar('renderEvent', NuevoEvento, true);
        j('#calendar').fullCalendar('refetchEvents');
        $('#modalEventos').modal('toggle');
      });
      /*$.ajax({
        type: 'POST',
        url: `${environment.api_url}/cronoact`,
        data: model,
        success: function (msg) {
          if (msg) {
            j('#calendar').fullCalendar('refetchEvents');
            $('#modalEventos').modal('toggle');
          }
        }
      });*/
    }
    function EliminarDatos(model) {
      cro.deleteCronoAct(model.id).subscribe(data => {
        console.log('entro', data);
        j('#calendar').fullCalendar('removeEvents', model.id);
        $('#modalEventos').modal('toggle');
      });
    }
    function ModificarDatos(model) {
      cro.putCronoAct(model.id, model).subscribe(data => {
        console.log('entro', data);
        j('#calendar').fullCalendar('updateEvent', model);
        $('#modalEventos').modal('toggle');
      });
    }
    function Limpiar() {
        j('#txtId').val(' ');
        j('#txtHora').val(' ');
        j('#txtTitulo').val(' ');
        j('#txtColor').val(' ');
        j('#txtDescripcion').val(' ');
    }
   }
 /* clearEvents() {
    this.events = [];
  }
  loadAgain() {
    this.eventService.getEvents().subscribe(data => {
      this.events = data;
    });
  }
  clickButton(model: any) {
    this.displayEvent = model;
  }
  eventClick(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title,
        allDay: model.event.allDay
        // other params
      },
      duration: {}
    }
    this.displayEvent = model;
  }
  updateEvent(model: any) {
    model = {
      event: {
        id: model.event.id,
        start: model.event.start,
        end: model.event.end,
        title: model.event.title
        // other params
      },
      duration: {
        _data: model.duration._data
      }
    }
    this.displayEvent = model;
  }
  windowResize(model: any) {
    console.log('The calendar has adjusted to a window resize');
  }
  viewRender(model: any) {
    console.log('viewRender');
  }
  eventRender(model: any) {
    this.logger.push(model);
  }
  initialized() {
    console.log('Initialized compleate');
  }
  select(model: any) {
    console.log(model);
  }
  unselect(model: any) {
    console.log(model);
  }*/
}

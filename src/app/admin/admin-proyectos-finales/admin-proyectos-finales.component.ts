import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import swal from 'sweetalert2';
import {FacultadCarreraService} from '../../services/facultad-carrera/facultad-carrera.service';

declare var $: any;
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-proyectos-finales',
  templateUrl: './admin-proyectos-finales.component.html',
  styleUrls: ['./admin-proyectos-finales.component.css']
})
export class AdminProyectosFinalesComponent implements OnInit {
  dtOptions: any = {};
  dtTrigger: Subject<any> = new Subject();

  public myForm: FormGroup;
  public editForm: FormGroup;

  id: number;
  data: any[];
  constructor(private temaFinalesService: FacultadCarreraService,  private fb: FormBuilder) { }

  ngOnInit() {
    AdminLTE.init();
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        'url': '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
      buttons: [
        'columnsToggle',
        'colvis',
        'copy',
        'print',
        'excel',
        {
          text: 'Some button',
          key: '1',
          action: function (e, dt, node, config) {
            alert('Button activated');
          }
        }
      ]
    };
    this.temaFinalesService.getTemaFinal().subscribe(data => {
      this.data = data.tema;
      this.dtTrigger.next();
      console.log('estudiante', this.data);
    });
  }

}

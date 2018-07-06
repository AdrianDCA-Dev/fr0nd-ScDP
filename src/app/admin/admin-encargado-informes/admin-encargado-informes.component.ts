import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import swal from 'sweetalert2';
import {InscriptionService} from '../../services/inscription/inscription.service';
import {PlanillaContTutorService} from '../../services/planilla-cont-tutor/planilla-cont-tutor.service';
import {EncargadoService} from '../../services/encargado/encargado.service';
import {AclService} from 'ng2-acl';

declare var $: any;
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-encargado-informes',
  templateUrl: './admin-encargado-informes.component.html',
  styleUrls: ['./admin-encargado-informes.component.css']
})
export class AdminEncargadoInformesComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  public myForm: FormGroup;
  public editForm: FormGroup;

  id: number;
  data: any[];
  model: any;
  dataEstudiante: any[];
  constructor(private estudianteService: InscriptionService,
              private aclService: AclService,
              private planContTutor: PlanillaContTutorService,
              private encargadoService: EncargadoService,
              private fb: FormBuilder) { }

  ngOnInit() {
    AdminLTE.init();
    this.aclService.resume();
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        'url': '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
    };
    this.estudianteService.getInscrip().subscribe(data => {
      this.dataEstudiante = data.estudiante;
      this.dtTrigger.next();
      console.log('estudiant', this.dataEstudiante);
    });
  }
  controlEstudiante(model: any) {
    console.log('model', model);
    this.encargadoService.getEncargadoInforme(model.user_id).subscribe(data => {
      this.data = data.control;
      console.log('control', this.data);
    });
  }
  aprobado(model: any) {
    console.log('modelTodo', model.inscripcion_id);
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].planilla.numero == 3 && this.data[i].inscripcion_id == model.inscripcion_id && this.data[i].estado == 'REVISADO') {
        swal({
          title: '¿Estás seguro?',
          text: 'Proyecto APROBADO UNO, ¡El proyecto se pondra en estado APROBADO UNO!',
          type: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Si, ¡Aceptar!',
        }).then((willDelete) => {
          if (willDelete.value) {
            this.planContTutor.putAprobadoTutor(model.inscripcion_id, model).subscribe(data => {
              console.log(data);
              /*this.data[index].estado = data.control.estado;*/
              swal(
                'Poof!',
                '¡El proyecto APROBADO UNO!',
                'success',
              );
            });
          }
        });
      } else {
        swal({
          type: 'error',
          title: 'Oops...',
          text: 'Nose revisaron Todos los INFORMES!',
        });
      }
    }
  }
}

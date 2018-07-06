import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import swal from 'sweetalert2';
import { ModuleService } from '../../services/module/module.service';
import {InscriptionService} from '../../services/inscription/inscription.service';
import {ToastrService} from 'ngx-toastr';

declare var $: any;
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-inscripcion-tema-tutor',
  templateUrl: './admin-inscripcion-tema-tutor.component.html',
  styleUrls: ['./admin-inscripcion-tema-tutor.component.css']
})
export class AdminInscripcionTemaTutorComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  public myForm: FormGroup;
  public editForm: FormGroup;

  id: number;
  data: any[];
  model: any;
  dataModalidad: any[];
  dataDocente: any[];
  dataEstudiante: any[];
  max = 0;
  constructor(private inscripcionService: InscriptionService,
              private toastr: ToastrService,
              private modalidadService: ModuleService, private fb: FormBuilder) { }

  ngOnInit() {
    AdminLTE.init();
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        'url': '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
    };
    this.modalidadService.getModalidad().subscribe(data => {
      this.dataModalidad = data.modalidades;
      console.log('modalidades', data.modalidades);
    });
    this.inscripcionService.getInscripcion().subscribe(data => {
      this.data = data.inscripcion;
      this.dtTrigger.next();
      console.log('inscripciones', this.data);
    });
    this.inscripcionService.getDocente().subscribe(data => {
      this.dataDocente = data.docente;
    });
    this.inscripcionService.getEstudiante().subscribe(data => {
      this.dataEstudiante = data.estudiante;
      console.log('estudiante', this.dataEstudiante);
    });
    this.myForm = this.fb.group({
        id: [null, Validators.required],
        user_id_ins: [null, Validators.required],
        modalidad_id: [null, Validators.required],
       /* fecha: [null, Validators.required],*/
        nombre: [null, [Validators.required, Validators.minLength(10)]],
        descripcion_ins: [null, Validators.required],
        user_id_tu: [null, Validators.required],
        descripcion_tu: [null, Validators.required],
      });
    this.editForm = this.fb.group({
        id: [null, Validators.required],
        user_id_ins: [null, Validators.required],
        modalidad_id: [null, Validators.required],
       /* fecha: [null, Validators.required],*/
        nombre: [null, [Validators.required, Validators.minLength(10)]],
        descripcion_ins: [null, Validators.required],
        user_id_tu: [null, Validators.required],
        descripcion_tu: [null, Validators.required],
    });
  }
  post(model: any) {
    console.log('funciona', this.max);

    if (this.max != 4) {
      this.inscripcionService.postInscripcion(model).subscribe(data => {
        this.data.push(data.tutor);
        console.log('postInscripcion', data.tutor);
        $('#modal-info').modal('hide');
        swal('¡Buen trabajo!', '¡Hiciste clic en el botón!', 'success');
      });
      this.myForm.reset();
    } else {
      this.toastr.error('El Tutor sobrepaso ALUMNOS!', 'ERROR..!');
    }
  }
  maximo(model: any) {
    console.log('maximo', model);
    this.max = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i].user_id == model.user_id) {
          this.max = this.max + 1;
      }
      if (this.max == 4) {
        this.toastr.error('El Tutor sobrepaso ALUMNOS!', 'ERROR..!');
      }
      console.log('prueba ', model.user_id);
    }
  }

  show(formData) {
    console.log('formData', formData);
    /*this.editForm.controls['id'].setValue(formData.persona.id);
    this.editForm.controls['dni'].setValue(formData.persona.dni);
    this.editForm.controls['nombres'].setValue(formData.persona.nombres);
    this.editForm.controls['app'].setValue(formData.persona.app);
    this.editForm.controls['apm'].setValue(formData.persona.apm);
    this.editForm.controls['sexo'].setValue(formData.persona.sexo);
    this.editForm.controls['fechaNac'].setValue(formData.persona.fechaNac);
    this.editForm.controls['direccion'].setValue(formData.persona.direccion);
    this.editForm.controls['fono'].setValue(formData.persona.fono);
    this.editForm.controls['name'].setValue(formData.name);
    this.editForm.controls['email'].setValue(formData.email);
    this.editForm.controls['estado'].setValue(formData.estado);*/
  }
  edit(model: any) {
    const formValue = this.editForm.getRawValue();
    const index = this.data.findIndex( data => data.id == formValue.id);
    this.model = model;
    this.model.id = this.id;
    this.inscripcionService.putInscripcion(this.model.id, this.model).subscribe( data => {
      console.log(data);
      console.log('formValue', formValue);
      this.data[index].user_id_ins = formValue.user_id_ins;
      this.data[index].modalidad_id = formValue.modalidad_id;
      this.data[index].fecha = data.fecha;
      this.data[index].nombre = formValue.nombre;
      this.data[index].descripcion_ins = formValue.descripcion_ins;
      this.data[index].user_id_tu = formValue.user_id_tu;
      this.data[index].carrera = formValue.carrera;
      this.data[index].descripcion_tu = formValue.descripcion_tu;
      $('#myModalEdit').modal('hide');
      swal('¡Buen trabajo!', '¡Hiciste clic en el botón!', 'success');
    });
    this.editForm.reset();
  }

}

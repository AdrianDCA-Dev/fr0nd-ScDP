import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import swal from 'sweetalert2';
import {TribunalService} from '../../services/tribunal/tribunal.service';
import {InscriptionService} from '../../services/inscription/inscription.service';

declare var $: any;
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-tribunal',
  templateUrl: './admin-tribunal.component.html',
  styleUrls: ['./admin-tribunal.component.css']
})
export class AdminTribunalComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  public myForm: FormGroup;
  public editForm: FormGroup;

  id: number;
  data: any[];
  model: any;
  dataInscripcionTutor: any[];
  dataDocente: any[];
  dataListaDocenteLibre: any[];
  dataDefensaAprobadoUno: any[];
  dataAnadir = [];
  datos: any = {};
  dataMostrar = [];
  datosp: string;
  datosd: string;
  constructor(private tribunalService: TribunalService, private docenteTribunalService: InscriptionService,
              private fb: FormBuilder) { }

  ngOnInit() {
    AdminLTE.init();
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        'url': '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
    };
    this.tribunalService.getTribunal().subscribe(data => {
      console.log('get', data.tribunal);
      this.data = data.tribunal;
      this.dtTrigger.next();
    });
    const dataDocenteLibre = [];
    this.docenteTribunalService.getDocente().subscribe(data => {
      /*this.docenteTribunalService.getInscripcion().subscribe(item => {
        if (data.docente.user_id !== item.inscripcion.user_id) {
            dataDocenteLibre.push({
              nombre: data.docente.nombre,
              apellidos: data.docente.nombre,
              user_id: data.docente.user_id,
            });
        }
      });*/
      this.dataDocente = data.docente;
      console.log('docente', this.dataDocente);
    });
    this.tribunalService.getDefensaAprobadoUno().subscribe(data => {
      this.dataDefensaAprobadoUno = data.defunoapro;
    });
    this.myForm = this.fb.group({
      id: [null, Validators.required],
      user_id: [null, Validators.required],
      defensa_id: [null, Validators.required],
      descripcion: [null, Validators.required],
      nota: [null, Validators.required],
    });
    this.editForm = this.fb.group({
      id: [null, Validators.required],
      user_id: [null, Validators.required],
      defensa_id: [null, Validators.required],
      descripcion: [null, Validators.required],
      nota: [null, Validators.required],
    });
  }
  agregar(model: any) {
    console.log('agregado', model);
    for (let i = 0; i < this.dataDocente.length; i++) {
      if (model.user_id == this.dataDocente[i].user_id) {
        this.datosp = this.dataDocente[i].nombre + ' ' + this.dataDocente[i].apellidos;
        console.log('prueba', this.dataDocente[i].nombre );
      }
    }
    this.dataAnadir.push({
      defensa_id: model.defensa_id,
      docente: this.datosp,
      user_id: model.user_id,
      descripcion: model.descripcion,
    });
    this.dataMostrar.push({
      user_id: this.datosp,
      descripcion: model.descripcion,
    });
    this.myForm.controls['descripcion'].reset();
  }
  post() {
    this.datos.tribunal = this.dataAnadir;
    console.log('enviardatos', this.datos);
    this.tribunalService.postTribunal(this.datos).subscribe(data => {
      console.log(data);
      this.ngOnInit();
    });
  }
  removeTemporal(model: any) {
    console.log('model', model);
    const index = this.dataAnadir.indexOf(model);
    console.log('index', index);
    if (index > -1) {
      this.dataAnadir.splice(index);
    }
  }
  show(formData) {
    console.log('formData', formData);
    this.id = formData.id;
    this.editForm.controls['id'].setValue(formData.id);
    this.editForm.controls['user_id'].setValue(formData.user_id);
  }
  edit(model: any) {
    const formValue = this.editForm.getRawValue();
    const index = this.data.findIndex( data => data.id == formValue.id);
    this.model = model;
    this.model.id = this.id;
    this.tribunalService.putTribunal(this.model.id, this.model).subscribe( data => {
      console.log(data);
      console.log('formValue', formValue);
      this.data[index].user_id = formValue.user_id;
      this.data[index].updated_at = data.tribunales.updated_at;
      $('#myModalEdit').modal('hide');
      swal('¡Buen trabajo!', '¡Hiciste clic en el botón!', 'success');
    });
    this.editForm.reset();
  }
}

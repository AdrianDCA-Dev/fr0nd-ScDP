import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import swal from 'sweetalert2';
import {DefensaService} from '../../services/defensa/defensa.service';

declare var $: any;
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-cronograma-defensa',
  templateUrl: './admin-cronograma-defensa.component.html',
  styleUrls: ['./admin-cronograma-defensa.component.css']
})
export class AdminCronogramaDefensaComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  public myForm: FormGroup;
  public editForm: FormGroup;

  id: number;
  data: any[];
  model: any;
  dataIncripActivos: any[];
  constructor(private cronDefService: DefensaService, private fb: FormBuilder) { }

  ngOnInit() {
    AdminLTE.init();
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        'url': '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
    };
    this.cronDefService.getInscripcionActivo().subscribe(data => {
      this.dataIncripActivos = data.inscripcion;
      console.log('Inscripctos', this.dataIncripActivos);
    });
    this.cronDefService.getCronDef().subscribe(data => {
      this.data = data.crondef;
      this.dtTrigger.next();
      console.log('dddd', this.data);
    });
    this.myForm = this.fb.group({
      id: [null, Validators.required],
      fechaDefModUno: [null, Validators.required],
      fechaDefModDos: [null, Validators.required],
      descripcion_cr: [null, Validators.required],
      inscripcion_id: [null, Validators.required],
    });
    this.editForm = this.fb.group({
      id: [null, Validators.required],
      fechaDefModUno: [null, Validators.required],
      fechaDefModDos: [null, Validators.required],
      descripcion_cr: [null, Validators.required],
      inscripcion_id: [null, Validators.required],
    });
  }
  post(model: any) {
    this.cronDefService.postCronDef(model).subscribe(data => {
      this.data.push(data.defensa);
      console.log('data', this.data);
      $('#modal-info').modal('hide');
      swal('¡Buen trabajo!', '¡Hiciste clic en el botón!', 'success');
    });
    this.myForm.reset();
  }
}

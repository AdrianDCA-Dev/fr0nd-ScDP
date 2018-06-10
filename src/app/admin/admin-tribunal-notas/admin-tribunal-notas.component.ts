import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import swal from 'sweetalert2';
import {TribunalNotasService} from '../../services/tribunal-notas/tribunal-notas.service';
import {AuthService} from '../../auth/services/auth.service';

declare var $: any;
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-tribunal-notas',
  templateUrl: './admin-tribunal-notas.component.html',
  styleUrls: ['./admin-tribunal-notas.component.css']
})
export class AdminTribunalNotasComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  public myForm: FormGroup;
  public editForm: FormGroup;

  id: number;
  data: any[];
  model: any;
  constructor(private tribunalNotasService: TribunalNotasService, private auth: AuthService,
              private fb: FormBuilder) { }

  ngOnInit() {
    AdminLTE.init();
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        'url': '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
    };
    this.tribunalNotasService.getTribunalNotas(this.auth.getUser().id).subscribe(data => {
      this.data = data.tribunalnotas;
      this.dtTrigger.next();
      console.log('control', this.data);
    });
    this.myForm = this.fb.group({
      id: [null, Validators.required],
      nota: [null, Validators.required],
    });
    this.editForm = this.fb.group({
      id: [null, Validators.required],
      nota: [null, Validators.required],
    });
  }
  show(formData) {
    console.log('formData', formData);
    this.id = formData.id;
    this.editForm.controls['id'].setValue(formData.id);
    this.editForm.controls['nota'].setValue(formData.nota);
  }
  edit(model: any) {
    const formValue = this.editForm.getRawValue();
    console.log('model', model);
    const index = this.data.findIndex( data => data.id == formValue.id);
    this.model = model;
    this.model.id = this.id;
    this.tribunalNotasService.putTribunalNotas(this.model.id, this.model).subscribe( data => {
      console.log(data);
      console.log('formValue', formValue);
      this.data[index].nota = data.tribunalnotas.nota;
      $('#myModalEdit').modal('hide');
      swal('¡Buen trabajo!', '¡Hiciste clic en el botón!', 'success');
    });
    this.editForm.reset();
  }
}

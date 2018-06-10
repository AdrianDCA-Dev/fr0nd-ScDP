import {ChangeDetectorRef, ElementRef, Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import swal from 'sweetalert2';
import {AuthService} from '../../auth/services/auth.service';
import {PlanillaContTutorService} from '../../services/planilla-cont-tutor/planilla-cont-tutor.service';
import {environment} from '../../../environments/environment';
import { FileSelectDirective, FileUploader} from 'ng2-file-upload';
import {saveAs} from 'file-saver';

declare var $: any;
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-planilla-control-tutor',
  templateUrl: './admin-planilla-control-tutor.component.html',
  styleUrls: ['./admin-planilla-control-tutor.component.css']
})
export class AdminPlanillaControlTutorComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  public myForm: FormGroup;
  public editForm: FormGroup;

  id: number;
  data: any[];
  model: any;

  constructor(private planContTutor: PlanillaContTutorService, private auth: AuthService,
              private cd: ChangeDetectorRef, private fb: FormBuilder) { }

  ngOnInit() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        'url': '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
     /* rowCallback: function(row, data)
      {
        if (data[7] == "Revicion") {
          $($(row).find('td')[7]).css('background-color', 'red');
        } else {
          $($(row).find('td')[7]).css('background-color', 'green');
        }

      },*/
    };
    this.planContTutor.getPlanillaContTutor(this.auth.getUser().id).subscribe(data => {
      this.data = data.control;
      this.dtTrigger.next();
      console.log('control', this.data);
    });
    console.log('user', this.auth.getUser().id);
    this.myForm = this.fb.group({
      id: [null, Validators.required],
      numero: [null, Validators.required],
      contenido: [null, Validators.required],
      fechaEntrega: [null, Validators.required],
      inscripcion_id: [null, Validators.required],
      tutor_id: [null, Validators.required],
      descripcion: [null, Validators.required],
    });
    this.editForm = this.fb.group({
      id: [null, Validators.required],
      estado: [null, Validators.required],
    });
  }
  dowload(model: any) {
    //window.location.href = `${environment.api_url}/` + model;
    const myBlob = new Blob([model],{
      type: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    });
    const blobURL = (window.URL || (<any>window).webkitURL).createObjectURL(myBlob);
    const anchor = document.createElement('a');
    anchor.download = `${environment.api_url}/` + model;
    anchor.href = blobURL;
    anchor.click();
  }
  updateEstado(model: any) {
    console.log('model', model.id);
    console.log('modelTodo', model);
    const formValue = this.editForm.getRawValue();
    const index = this.data.findIndex( data => data.id == model.id);

    swal({
      title: '¿Estás seguro?',
      text: 'Proyecto Revisado, ¡El proyecto se pondra en estado REViSADO!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, ¡Aceptar!',
    }).then((willDelete) => {
      if (willDelete.value) {
        this.planContTutor.putPlanillaContTutor(model.id, model).subscribe(data => {
          console.log(data);
          this.data[index].estado = data.control.estado;
          swal(
            'Poof!',
            '¡El proyecto paso ha estado REVISADO!',
            'success',
          );
        });
      }
    });
  }

}

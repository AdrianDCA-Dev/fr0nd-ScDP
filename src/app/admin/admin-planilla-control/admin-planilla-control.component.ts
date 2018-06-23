import {ChangeDetectorRef, ElementRef, Component, OnInit, ViewChild} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import swal from 'sweetalert2';
import {PlanillaControlService} from '../../services/planilla-control/planilla-control.service';
import {AuthService} from '../../auth/services/auth.service';

declare var $: any;
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-planilla-control',
  templateUrl: './admin-planilla-control.component.html',
  styleUrls: ['./admin-planilla-control.component.css']
})
export class AdminPlanillaControlComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  public myForm: FormGroup;
  public editForm: FormGroup;

  id: number;
  data: any[];
  model: any;
  dataPlanInscripcion: any[];
  dataPlanTutor: any[];
  datos: any = {};
  filedata: any;
  //fileToUpload: File = null;
  ContenidoFile: File;
  @ViewChild('contenido') fileInput;
  constructor(private planCont: PlanillaControlService, private auth: AuthService,
              private cd: ChangeDetectorRef, private fb: FormBuilder) { }
  ngOnInit() {
    AdminLTE.init();
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        'url': '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
      rowCallback: function(row, data)
      {
        if (data[5] == '<b _ngcontent-c6="">REVICION</b>') {
          $($(row).find('td')[5]).css('background-color', 'red');
        } else {
          $($(row).find('td')[5]).css('background-color', 'green');
        }
      },
    };
    this.planCont.getPlanCont(this.auth.getUser().id).subscribe(data => {
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
      numero: [null, Validators.required],
      contenido: [null, Validators.required],
      fechaEntrega: [null, Validators.required],
      inscripcion_id: [null, Validators.required],
      tutor_id: [null, Validators.required],
      descripcion: [null, Validators.required],
    });
    this.planCont.getPlanInscripcion(this.auth.getUser().id).subscribe(data => {
      this.dataPlanInscripcion = data.inscripto;
      console.log('inscripto', this.dataPlanInscripcion);
    });
    this.planCont.getPlanTutor(this.auth.getUser().id).subscribe(data => {
      this.dataPlanTutor = data.tutor;
      console.log('tutor', this.dataPlanTutor);
    });
  }
  private prepareSave() {
    let input = new FormData();
    input.append('numero', this.myForm.get('numero').value);
    input.append('contenido', this.myForm.get('contenido').value);
    console.log('coco', input.append('contenido', this.myForm.get('contenido').value));
    return input;
  }
  post(model: any) {
    const Image = this.fileInput.nativeElement;
    if (Image.files && Image.files[0]) {
      this.ContenidoFile = Image.files[0];
    }
    const ContenidoFil: File = this.ContenidoFile;
    console.log('contenido', ContenidoFil);
    const formData: FormData = new FormData();
    formData.append('numero', model.numero);
    formData.append('inscripcion_id', model.inscripcion_id);
    formData.append('tutor_id', model.tutor_id);
    formData.append('descripcion', model.descripcion);
    formData.append('contenido', ContenidoFil, ContenidoFil.name);
    console.log('contenido222', formData);
    for (let i = 0; i < this.dataPlanInscripcion.length; i++) {
      this.myForm.controls['inscripcion_id'].setValue(this.dataPlanInscripcion[i].id);
      this.datos.inscripcion_id = this.dataPlanInscripcion[i].id;
    }
    for (let i = 0; i < this.dataPlanTutor.length; i++) {
      this.myForm.controls['tutor_id'].setValue(this.dataPlanTutor[i].id);
      this.datos.tutor_id = this.dataPlanTutor[i].id;
    }
    this.planCont.postPlanCont(formData).subscribe(data => {
      this.data.push(data.control);
      console.log('data', this.data);
      $('#modal-info').modal('hide');
      swal('¡Buen trabajo!', '¡Hiciste clic en el botón!', 'success');
    });
  }
}

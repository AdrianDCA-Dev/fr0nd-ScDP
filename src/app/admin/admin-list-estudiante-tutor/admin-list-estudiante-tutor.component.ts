import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Subject } from 'rxjs/Subject';
import swal from 'sweetalert2';
import {PlanillaContTutorService} from '../../services/planilla-cont-tutor/planilla-cont-tutor.service';
import {AuthService} from '../../auth/services/auth.service';

declare var $: any;
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-list-estudiante-tutor',
  templateUrl: './admin-list-estudiante-tutor.component.html',
  styleUrls: ['./admin-list-estudiante-tutor.component.css']
})
export class AdminListEstudianteTutorComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  id: number;
  data: any[];
  model: any;
  constructor(private listEstuTutor: PlanillaContTutorService,
              private auth: AuthService) { }

  ngOnInit() {
    AdminLTE.init();
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        'url': '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
    };
    this.listEstuTutor.getTutorListaEstudiante(this.auth.getUser().id).subscribe(data => {
      this.data = data.listestudiante;
      console.log('datas', this.data);
    });
  }

}

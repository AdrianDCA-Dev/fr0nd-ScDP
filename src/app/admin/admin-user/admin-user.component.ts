import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import swal from 'sweetalert2';
import {UserService} from '../../services/user/user.service';

declare var $: any;
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-user',
  templateUrl: './admin-user.component.html',
  styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  public myForm: FormGroup;
  public editForm: FormGroup;

  id: number;
  data: any[];
  model: any;
  dataRole: any[];
  role = [];
  constructor(private userService: UserService, private fb: FormBuilder) { }

  ngOnInit() {
    AdminLTE.init();
    this.dtOptions = {
      pagingType: 'full_numbers',
      language: {
        'url': '//cdn.datatables.net/plug-ins/1.10.16/i18n/Spanish.json',
      },
    };
    this.userService.getUsers().subscribe(data => {
      this.data = data.user;
      console.log('docente', this.data);
      this.dtTrigger.next();
    });
    this.userService.getRoles().subscribe(data => {
      this.dataRole = data.role;
      console.log('roles', this.dataRole);
    });
    this.myForm = this.fb.group({
        id: [null, Validators.required],
        ci: [null, [Validators.required, Validators.maxLength(11), Validators.minLength(7)]],
        nombre: [null, [Validators.required, Validators.maxLength(25)]],
        apellidos: [null, [Validators.required, Validators.maxLength(25)]],
        sexo: [null, Validators.required],
        fechaNac: [null, Validators.required],
        direccion: [null, Validators.required],
        telefono: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(5)]],
        celular: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(5)]],
        carrera: [null, [Validators.required, Validators.minLength(10)]],
        name: [null, [Validators.required, Validators.maxLength(50), Validators.minLength(4)]],
        email: [null, [Validators.required, Validators.maxLength(100), Validators.email]],
        password: [null, [Validators.required, Validators.maxLength(60), Validators.minLength(8)]],
        password_confirmation: [null, [Validators.required, Validators.maxLength(60), Validators.minLength(8)]],
        estado: [null, Validators.required],
        role: [null, Validators.required],
      });
    this.editForm = this.fb.group({
        id: [null, Validators.required],
        ci: [null, [Validators.required, Validators.maxLength(11), Validators.minLength(7)]],
        nombre: [null, [Validators.required, Validators.maxLength(25)]],
        apellidos: [null, [Validators.required, Validators.maxLength(25)]],
        sexo: [null, Validators.required],
        fechaNac: [null, Validators.required],
        direccion: [null, Validators.required],
        telefono: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(5)]],
        celular: [null, [Validators.required, Validators.maxLength(10), Validators.minLength(5)]],
        carrera: [null, [Validators.required, Validators.minLength(10)]],
        name: [null, [Validators.required, Validators.maxLength(50), Validators.minLength(4)]],
        email: [null, [Validators.required, Validators.maxLength(100), Validators.email]],
        password: [null, [Validators.required, Validators.maxLength(60), Validators.minLength(8)]],
        password_confirmation: [null, [Validators.required, Validators.maxLength(60), Validators.minLength(8)]],
        estado: [null, Validators.required],
        role: [null, Validators.required],
    });
  }

  post(model: any) {
    console.log('funiona', model);
    this.userService.postUsers(model).subscribe(data => {
      this.data.push(data.user);
      console.log('data', this.data);
      $('#modal-info').modal('hide');
      swal('¡Buen trabajo!', '¡Hiciste clic en el botón!', 'success');
    });
    this.myForm.reset();
  }
}

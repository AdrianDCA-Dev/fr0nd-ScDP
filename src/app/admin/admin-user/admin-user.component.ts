import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import swal from 'sweetalert2';
import {UserService} from '../../services/user/user.service';
import {FacultadCarreraService} from '../../services/facultad-carrera/facultad-carrera.service';
import * as generator from 'generate-password';

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
  Cargandodatos = false;
  id: number;
  data: any[];
  model: any;
  dataRole: any[];
  role = [];
  dataFacultad: any[];
  dataCarrera: any[];
  constructor(private userService: UserService,
              private facultadCarreraService: FacultadCarreraService,
              private fb: FormBuilder) { }

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
    this.facultadCarreraService.getFacultad().subscribe(data => {
      this.dataFacultad = data.facultad;
      console.log('facultad', this.dataFacultad);
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
        carrera_id: [null, [Validators.required]],
        name: [null, [Validators.required, Validators.maxLength(50), Validators.minLength(4)]],
        email: [null, [Validators.required, Validators.maxLength(100), Validators.email]],
        password: [null, [Validators.required, Validators.maxLength(60), Validators.minLength(8)]],
        password_confirmation: [null, [Validators.required, Validators.maxLength(60), Validators.minLength(8)]],
        estado: [null, Validators.required],
        role: [null, Validators.required],
        length: [null, Validators.required],
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
        carrera_id: [null, [Validators.required]],
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

  randomPassword(length: any) {
    /*const chars = 'abcdefghijklmnopqrstuvwxyz!@#$%^&*()-+<>ABCDEFGHIJKLMNOP1234567890';*/
    const chars = 'abcdefghijklmnopqrstuvwxyz@#-+<>ABCDEFGHIJKLMNOP1234567890';
    let pass = '';
    for (let x = 0; x < length; x++) {
      const i = Math.floor(Math.random() * chars.length);
      pass += chars.charAt(i);
    }
    return pass;
  }

  generar() {
    const gen = this.randomPassword(10);
    this.myForm.controls['password'].setValue(gen);
    this.myForm.controls['password_confirmation'].setValue(gen);
    console.log('password', this.randomPassword(10));
  }
  carrera(id: any) {
    console.log('carrera_id', id.id);
    this.facultadCarreraService.getCarrera(id.id).subscribe(data => {
      this.dataCarrera = data.carrera;
      this.Cargandodatos = false;
      console.log('carrera', this.dataCarrera);
    });
  }
}

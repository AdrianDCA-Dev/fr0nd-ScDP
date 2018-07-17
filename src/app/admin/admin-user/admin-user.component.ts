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
        facultad: [null, [Validators.required]],
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
        facultad: [null, [Validators.required]],
        carrera_id: [null, [Validators.required]],
        name: [null, [Validators.required, Validators.maxLength(50), Validators.minLength(4)]],
        email: [null, [Validators.required, Validators.maxLength(100), Validators.email]],
        password: [null, [Validators.required, Validators.maxLength(60), Validators.minLength(8)]],
        password_confirmation: [null, [Validators.required, Validators.maxLength(60), Validators.minLength(8)]],
        estado: [null, Validators.required],
        role: [null, Validators.required],
        length: [null, Validators.required],
    });
  }
  show(formData) {
    console.log('formData', formData);
    console.log('fromSexo', formData.persona.sexo);

    this.id = formData.id;
    this.editForm.controls['id'].setValue(formData.persona.id);
    this.editForm.controls['ci'].setValue(formData.persona.ci);
    this.editForm.controls['nombre'].setValue(formData.persona.nombre);
    this.editForm.controls['apellidos'].setValue(formData.persona.apellidos);
    this.editForm.controls['sexo'].setValue(formData.persona.sexo);
    this.editForm.controls['fechaNac'].setValue(formData.persona.fechaNac);
    this.editForm.controls['direccion'].setValue(formData.persona.direccion);
    this.editForm.controls['telefono'].setValue(formData.persona.telefono);
    this.editForm.controls['celular'].setValue(formData.persona.celular);
    this.editForm.controls['carrera_id'].setValue(formData.persona.carrera_id);
    this.editForm.controls['name'].setValue(formData.name);
    this.editForm.controls['email'].setValue(formData.email);
    this.editForm.controls['password'].setValue(formData.password);
    this.editForm.controls['password_confirmation'].setValue(formData.password_confirmation);
    this.editForm.controls['estado'].setValue(formData.estado);
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

  edit(model: any) {
    const formValue = this.editForm.getRawValue();
    const index = this.data.findIndex( data => data.id == formValue.id);
    this.model = model;
    this.model.id = this.id;
    this.userService.putUsers(this.model.id, this.model).subscribe( data => {
      console.log(data);
      console.log('formValue', this.data[index]);
      this.data[index].persona.ci = formValue.ci;
      this.data[index].persona.nombre = formValue.nombre;
      this.data[index].persona.apellidos = formValue.apellidos;
      this.data[index].persona.fechaNac = formValue.fechaNac;
      this.data[index].persona.direccion = formValue.direccion;
      this.data[index].persona.telefono = formValue.telefono;
      this.data[index].persona.celular = formValue.celular;
      this.data[index].name = formValue.name;
      this.data[index].email = formValue.email;
      $('#myModalEdit').modal('hide');
      swal('¡Buen trabajo!', '¡Hiciste clic en el botón!', 'success');
    });
    this.editForm.reset();
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
  generarm() {
    const gen = this.randomPassword(10);
    this.editForm.controls['password'].setValue(gen);
    this.editForm.controls['password_confirmation'].setValue(gen);
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

  remove(model: any) {
    this.id = model.id;
    const index = this.data.indexOf(model);
    swal({
      title: '¿Estás seguro?',
      text: 'Una vez eliminada, ¡no podrá recuperar este archivo!',
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, ¡bórralo!',
    }).then((willDelete) => {
      if (willDelete.value) {
        this.userService.deleteUsers(this.id).subscribe(data => {
          console.log(data);
          if (index > -1) {
            this.data.splice(index, 1);
          }
          swal(
            'Poof!',
            '¡Tu archivo ha sido eliminado!',
            'success',
          );
        });
      }
    });
  }
}

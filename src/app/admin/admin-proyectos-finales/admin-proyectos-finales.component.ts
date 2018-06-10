import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Subject} from 'rxjs/Subject';
import swal from 'sweetalert2';

declare var $: any;
declare var AdminLTE: any;

@Component({
  selector: 'app-admin-proyectos-finales',
  templateUrl: './admin-proyectos-finales.component.html',
  styleUrls: ['./admin-proyectos-finales.component.css']
})
export class AdminProyectosFinalesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    AdminLTE.init();
  }

}

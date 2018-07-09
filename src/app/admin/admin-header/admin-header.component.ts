import { AuthService } from './../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {
  nombre: string;
  roles: string;
  nombres: string;
  apellidos: string;
  data: any;
  constructor(public auth: AuthService) { }

  ngOnInit() {
    this.nombre = this.auth.getUser().name;
    this.roles = this.auth.getRol();
    this.data = this.auth.getUser();
  }

  logout(e) {
    e.preventDefault();
    this.auth.logout();
  }

}

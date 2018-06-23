import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { AclService } from 'ng2-acl/dist';
import * as $ from 'jquery';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  f: FormGroup;
  errorCredentials = false;
  data: any;
  dataRol: any[];
  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private aclService: AclService) { }

  ngOnInit() {
    this.authService.getRole().subscribe(data => {
      this.dataRol = data.roles;
    });
    this.f = this.formBuilder.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      role: [null, [Validators.required]]
    });
  }

  onSubmit() {
    this.authService.login(this.f.value).subscribe(
      (resp) => {
        this.data = resp;
        console.log('login', resp);
        for (let i = 0; i < this.data.userRole.length; i++) {
          console.log('loco', this.data.userRole[i]);
          this.aclService.attachRole(this.data.userRole[i]);
        }
        this.aclService.setAbilities(this.data.abilities);

        this.router.navigate(['admin']);
      },
      (errorResponse: HttpErrorResponse) => {
        if (errorResponse.status === 401) {
          this.errorCredentials = true;
        }
      }
    );
  }

}

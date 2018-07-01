import { AuthService } from './../../auth/services/auth.service';
import { Component, OnInit } from '@angular/core';
import {AclService} from 'ng2-acl';
import {TribunalService} from '../../services/tribunal/tribunal.service';
import {PlanillaControlService} from '../../services/planilla-control/planilla-control.service';

@Component({
  selector: 'app-admin-left-side',
  templateUrl: './admin-left-side.component.html',
  styleUrls: ['./admin-left-side.component.css']
})
export class AdminLeftSideComponent implements OnInit {
  data: any[];
  dataPlanTutor: any[];
  constructor(public auth: AuthService, private tribunales: TribunalService,
              private tutor: PlanillaControlService, private aclService: AclService) { }

  ngOnInit() {
    this.aclService.resume();
    /*this.tribunales.getMostrarTribunales(this.auth.getUser().id).subscribe(data => {
      this.data = data.tribunales;
    });
    this.tutor.getPlanTutor(this.auth.getUser().id).subscribe(data => {
      this.dataPlanTutor = data.tutor;
      console.log('tutor', this.dataPlanTutor);
    });*/
  }

}

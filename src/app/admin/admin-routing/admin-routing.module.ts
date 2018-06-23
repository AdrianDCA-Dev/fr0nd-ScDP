import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { AuthGuard } from './../../guards/auth.guard';
import { AdminComponent } from './../admin.component';
import { AdminDashboard1Component } from './../admin-dashboard1/admin-dashboard1.component';
import { AdminDashboard2Component } from './../admin-dashboard2/admin-dashboard2.component';
import { ProfileComponent } from './../../auth/profile/profile.component';
import { AdminUserComponent } from './../admin-user/admin-user.component';
import { AdminInscripcionTemaTutorComponent } from './../admin-inscripcion-tema-tutor/admin-inscripcion-tema-tutor.component';
import {AdminCronogramaDefensaComponent} from '../admin-cronograma-defensa/admin-cronograma-defensa.component';
import {AdminTribunalComponent} from '../admin-tribunal/admin-tribunal.component';
import {AdminCronogramaActividadesComponent} from '../admin-cronograma-actividades/admin-cronograma-actividades.component';
import {AdminVisualizarCronogramaActividadesComponent
} from '../admin-visualizar-cronograma-actividades/admin-visualizar-cronograma-actividades.component';
import {AdminPlanillaControlComponent} from '../admin-planilla-control/admin-planilla-control.component';
import {AdminProyectosFinalesComponent} from '../admin-proyectos-finales/admin-proyectos-finales.component';
import {AdminPlanillaControlTutorComponent} from '../admin-planilla-control-tutor/admin-planilla-control-tutor.component';
import {AdminTribunalNotasComponent} from '../admin-tribunal-notas/admin-tribunal-notas.component';
import {AdminEncargadoInformesComponent} from '../admin-encargado-informes/admin-encargado-informes.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'admin',
        component: AdminComponent, canActivate: [AuthGuard], canActivateChild: [AuthGuard],
        children: [
          {
            path: '',
            redirectTo: 'inicio',
            pathMatch: 'full'
          },
          { path: 'dashboard2', component: AdminDashboard1Component},
          { path: 'inicio', component: AdminDashboard2Component },
          { path: 'profile', component: ProfileComponent },
          { path: 'admin-user', component: AdminUserComponent },
          { path: 'admin-inscripcion-tema-tutor', component: AdminInscripcionTemaTutorComponent },
          { path: 'admin-cronograma-defensa', component: AdminCronogramaDefensaComponent },
          { path: 'admin-tribunal', component: AdminTribunalComponent},
          { path: 'admin-cronograma-actividades', component: AdminCronogramaActividadesComponent },
          { path: 'admin-visualizar', component: AdminVisualizarCronogramaActividadesComponent },
          { path: 'admin-planilla-control', component: AdminPlanillaControlComponent },
          { path: 'admin-proyectos-finales', component: AdminProyectosFinalesComponent},
          { path: 'admin-planilla-control-tutor', component: AdminPlanillaControlTutorComponent},
          { path: 'admin-tribunal-notas', component: AdminTribunalNotasComponent},
          { path: 'admin-encargado-informes', component: AdminEncargadoInformesComponent},
        ]
      }
    ])
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }

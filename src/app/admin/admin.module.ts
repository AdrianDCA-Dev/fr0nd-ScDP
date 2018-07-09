import { AdminRoutingModule } from './admin-routing/admin-routing.module';
import { AdminDashboard1Component } from './admin-dashboard1/admin-dashboard1.component';
import { AdminControlSidebarComponent } from './admin-control-sidebar/admin-control-sidebar.component';
import { AdminFooterComponent } from './admin-footer/admin-footer.component';
import { AdminContentComponent } from './admin-content/admin-content.component';
import { AdminLeftSideComponent } from './admin-left-side/admin-left-side.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminComponent } from './admin.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboard2Component } from './admin-dashboard2/admin-dashboard2.component';
import { AdminUserComponent } from './admin-user/admin-user.component';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminInscripcionTemaTutorComponent } from './admin-inscripcion-tema-tutor/admin-inscripcion-tema-tutor.component';
import { AdminCronogramaDefensaComponent } from './admin-cronograma-defensa/admin-cronograma-defensa.component';
import { AdminTribunalComponent } from './admin-tribunal/admin-tribunal.component';
import { AdminCronogramaActividadesComponent } from './admin-cronograma-actividades/admin-cronograma-actividades.component';
import { FullCalendarModule} from 'ng-fullcalendar';
import {
  AdminVisualizarCronogramaActividadesComponent
} from './admin-visualizar-cronograma-actividades/admin-visualizar-cronograma-actividades.component';
import {NgSelectModule} from '@ng-select/ng-select';
import { AdminPlanillaControlComponent } from './admin-planilla-control/admin-planilla-control.component';
import {BoolSexoPipe} from '../pipes/bool-sexo/bool-sexo.pipe';
import { AdminPlanillaControlTutorComponent } from './admin-planilla-control-tutor/admin-planilla-control-tutor.component';
import { AdminProyectosFinalesComponent } from './admin-proyectos-finales/admin-proyectos-finales.component';
import {UICarouselModule} from 'ui-carousel';
import { AdminTribunalNotasComponent } from './admin-tribunal-notas/admin-tribunal-notas.component';
import { AdminEncargadoInformesComponent } from './admin-encargado-informes/admin-encargado-informes.component';
import {ToastrModule} from 'ngx-toastr';
import { AdminReporteAvanceAcademicoComponent } from './admin-reporte-avance-academico/admin-reporte-avance-academico.component';
import { AdminReporteCronogramaComponent } from './admin-reporte-cronograma/admin-reporte-cronograma.component';
import { AdminReporteDefensaModalidadComponent } from './admin-reporte-defensa-modalidad/admin-reporte-defensa-modalidad.component';
import {AmChartsModule} from '@amcharts/amcharts3-angular';
import { AdminListEstudianteTutorComponent } from './admin-list-estudiante-tutor/admin-list-estudiante-tutor.component';
import {NguCarouselModule} from '@ngu/carousel';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    AdminRoutingModule,
    DataTablesModule,
    FullCalendarModule,
    NgSelectModule,
    UICarouselModule,
    ToastrModule,
    AmChartsModule,
    NguCarouselModule,
  ],
  declarations: [
    AdminComponent,
    AdminHeaderComponent,
    AdminLeftSideComponent,
    AdminContentComponent,
    AdminFooterComponent,
    AdminControlSidebarComponent,
    AdminDashboard1Component,
    AdminDashboard2Component,
    AdminUserComponent,
    AdminInscripcionTemaTutorComponent,
    AdminCronogramaDefensaComponent,
    AdminTribunalComponent,
    AdminCronogramaActividadesComponent,
    AdminVisualizarCronogramaActividadesComponent,
    AdminPlanillaControlComponent,
    BoolSexoPipe,
    AdminPlanillaControlTutorComponent,
    AdminProyectosFinalesComponent,
    AdminTribunalNotasComponent,
    AdminEncargadoInformesComponent,
    AdminReporteAvanceAcademicoComponent,
    AdminReporteCronogramaComponent,
    AdminReporteDefensaModalidadComponent,
    AdminListEstudianteTutorComponent,
  ],
  exports: [AdminComponent]
})
export class AdminModule { }

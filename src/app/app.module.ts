import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { TokenInterceptor } from './interceptors/token.interceptor';
import { RefreshTokenInterceptor } from './interceptors/refresh-token.interceptor';
import { AplicationErrorHandle } from './app.error-handle';
import { AuthGuard } from './guards/auth.guard';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AdminModule } from './admin/admin.module';
import { AuthModule } from './auth/auth.module';
import { AppComponent } from './app.component';
import { UserService } from './services/user/user.service';
import { ModuleService } from './services/module/module.service';
import {InscriptionService} from './services/inscription/inscription.service';
import {DefensaService} from './services/defensa/defensa.service';
import {EvaluationService} from './services/evaluation/evaluation.service';
import {TribunalService} from './services/tribunal/tribunal.service';
import {AclService} from 'ng2-acl';
import {EventService} from './services/event/event.service';
import {CronogramaService} from './services/cronograma/cronograma.service';
import {PlanillaControlService} from './services/planilla-control/planilla-control.service';
import {PlanillaContTutorService} from './services/planilla-cont-tutor/planilla-cont-tutor.service';
import {TribunalNotasService} from './services/tribunal-notas/tribunal-notas.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    AdminModule
  ],
  providers: [
    AuthGuard, UserService, ModuleService, InscriptionService, DefensaService, EvaluationService,
    TribunalService, AclService, EventService, CronogramaService, PlanillaControlService,
    PlanillaContTutorService, TribunalNotasService,
    {provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
    {provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
    {provide: ErrorHandler, useClass: AplicationErrorHandle }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

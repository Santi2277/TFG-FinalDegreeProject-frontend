import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { EjercicioListaComponent } from './components/ejercicio-lista/ejercicio-lista.component';
import { EntrenadorListaComponent } from './components/entrenador-lista/entrenador-lista.component';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule, Router} from '@angular/router';
import { EntrenadorEjercicioComponent } from './components/entrenador-ejercicio/entrenador-ejercicio.component';
import { EntrenadorParametroComponent } from './components/entrenador-parametro/entrenador-parametro.component';
import { EntrenadorMedidaComponent } from './components/entrenador-medida/entrenador-medida.component';
import { EntrenadorParametroParametroComponent } from './components/entrenador-parametro-parametro/entrenador-parametro-parametro.component';
import { EntrenadorParametroParametrogrupoComponent } from './components/entrenador-parametro-parametrogrupo/entrenador-parametro-parametrogrupo.component';
import { EntrenadorParametroParametrovalorComponent } from './components/entrenador-parametro-parametrovalor/entrenador-parametro-parametrovalor.component';
import { EntrenadorParametroParametrosubvalorComponent } from './components/entrenador-parametro-parametrosubvalor/entrenador-parametro-parametrosubvalor.component';
import { EntrenadorMedidaMedidagrupoComponent } from './components/entrenador-medida-medidagrupo/entrenador-medida-medidagrupo.component';
import { EntrenadorMedidaMedidaunidadComponent } from './components/entrenador-medida-medidaunidad/entrenador-medida-medidaunidad.component';
import { EntrenadorMedidaMedidavalorComponent } from './components/entrenador-medida-medidavalor/entrenador-medida-medidavalor.component';
import { EntrenadorComponent } from './components/entrenador/entrenador.component';
import { RutinaListaComponent } from './components/rutina-lista/rutina-lista.component';
import { EjercicioComponent } from './components/ejercicio/ejercicio.component';
import { EEjercicioBuscarComponent } from './components/e-ejercicio-buscar/e-ejercicio-buscar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EEjercicioDetalleComponent } from './components/e-ejercicio-detalle/e-ejercicio-detalle.component';
import { EEjercicioCrearComponent } from './components/e-ejercicio-crear/e-ejercicio-crear.component';
import { EEjercicioEditarComponent } from './components/e-ejercicio-editar/e-ejercicio-editar.component';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component'

import {
  OKTA_CONFIG,
  OktaAuthModule,
  OktaCallbackComponent,
  OktaAuthGuard
} from '@okta/okta-angular';

import myAppConfig from './config/my-app-config';
import { EpParametroBuscarComponent } from './components/ep-parametro-buscar/ep-parametro-buscar.component';
import { EpParametroCrearComponent } from './components/ep-parametro-crear/ep-parametro-crear.component';
import { EpParametroDetalleComponent } from './components/ep-parametro-detalle/ep-parametro-detalle.component';
import { EpParametroEditarComponent } from './components/ep-parametro-editar/ep-parametro-editar.component';
import { EpParametrogrupoBuscarComponent } from './components/ep-parametrogrupo-buscar/ep-parametrogrupo-buscar.component';
import { EpParametrogrupoCrearComponent } from './components/ep-parametrogrupo-crear/ep-parametrogrupo-crear.component';
import { EpParametrogrupoDetalleComponent } from './components/ep-parametrogrupo-detalle/ep-parametrogrupo-detalle.component';
import { EpParametrogrupoEditarComponent } from './components/ep-parametrogrupo-editar/ep-parametrogrupo-editar.component';
import { EpParametrovalorBuscarComponent } from './components/ep-parametrovalor-buscar/ep-parametrovalor-buscar.component';
import { EpParametrovalorCrearComponent } from './components/ep-parametrovalor-crear/ep-parametrovalor-crear.component';
import { EpParametrovalorDetalleComponent } from './components/ep-parametrovalor-detalle/ep-parametrovalor-detalle.component';
import { EpParametrovalorEditarComponent } from './components/ep-parametrovalor-editar/ep-parametrovalor-editar.component';
import { EpParametrosubvalorBuscarComponent } from './components/ep-parametrosubvalor-buscar/ep-parametrosubvalor-buscar.component';
import { EpParametrosubvalorCrearComponent } from './components/ep-parametrosubvalor-crear/ep-parametrosubvalor-crear.component';
import { EpParametrosubvalorDetalleComponent } from './components/ep-parametrosubvalor-detalle/ep-parametrosubvalor-detalle.component';
import { EpParametrosubvalorEditarComponent } from './components/ep-parametrosubvalor-editar/ep-parametrosubvalor-editar.component';

const oktaConfig = Object.assign({
  onAuthRequired: (oktaAuth: any, injector: { get: (arg0: typeof Router) => any; }) => {
    const router = injector.get(Router);

    // Redirect the user to your custom login page
    router.navigate(['/login']);
  }
}, myAppConfig.oidc);

const routes: Routes = [
  
  {path: 'login/callback', component: OktaCallbackComponent},
  {path: 'login', component: LoginComponent},

  {path: 'ejercicios', component: EjercicioListaComponent},
  {path: 'main', component: MainContentComponent},
  {path: 'main/rutinas', component: RutinaListaComponent},
  {path: 'main/entrenadores', component: EntrenadorListaComponent},
  {path: 'entrenador/ejercicio', component: EntrenadorEjercicioComponent},
  {path: 'entrenador/parametro', component: EntrenadorParametroComponent},
  {path: 'entrenador/parametro/parametro', component: EntrenadorParametroParametroComponent},
  {path: 'entrenador/parametro/parametrogrupo', component: EntrenadorParametroParametrogrupoComponent},
  {path: 'entrenador/parametro/parametrovalor', component: EntrenadorParametroParametrovalorComponent},
  {path: 'entrenador/parametro/parametrosubvalor', component: EntrenadorParametroParametrosubvalorComponent},
  {path: 'entrenador/medida', component: EntrenadorMedidaComponent},
  {path: 'entrenador/medida/medidagrupo', component: EntrenadorMedidaMedidagrupoComponent},
  {path: 'entrenador/medida/medidaunidad', component: EntrenadorMedidaMedidaunidadComponent},
  {path: 'entrenador/medida/medidavalor', component: EntrenadorMedidaMedidavalorComponent},
  {path: 'entrenador/panel', component: EntrenadorComponent},
  {path: 'entrenador/ejercicio/buscar', component: EEjercicioBuscarComponent},
  {path: 'entrenador/ejercicio/detalle/:id', component: EEjercicioDetalleComponent},
  {path: 'entrenador/ejercicio/editar/:id', component: EEjercicioEditarComponent},
  {path: 'entrenador/ejercicio/crear', component: EEjercicioCrearComponent},
  {path: 'entrenador/parametro/parametro/buscar', component: EpParametroBuscarComponent},
  {path: 'entrenador/parametro/parametro/crear', component: EpParametroCrearComponent},
  {path: 'entrenador/parametro/parametro/detalle/:id', component: EpParametroDetalleComponent},
  {path: 'entrenador/parametro/parametro/editar/:id', component: EpParametroEditarComponent},
  {path: 'entrenador/parametro/parametrogrupo/buscar', component: EpParametrogrupoBuscarComponent},
  {path: 'entrenador/parametro/parametrogrupo/crear', component: EpParametrogrupoCrearComponent},
  {path: 'entrenador/parametro/parametrogrupo/detalle/:id', component: EpParametrogrupoDetalleComponent},
  {path: 'entrenador/parametro/parametrogrupo/editar/:id', component: EpParametrogrupoEditarComponent},
  {path: 'entrenador/parametro/parametrovalor/buscar', component: EpParametrovalorBuscarComponent},
  {path: 'entrenador/parametro/parametrovalor/crear', component: EpParametrovalorCrearComponent},
  {path: 'entrenador/parametro/parametrovalor/detalle/:id', component: EpParametrovalorDetalleComponent},
  {path: 'entrenador/parametro/parametrovalor/editar/:id', component: EpParametrovalorEditarComponent},
  {path: 'entrenador/parametro/parametrosubvalor/buscar', component: EpParametrosubvalorBuscarComponent},
  {path: 'entrenador/parametro/parametrosubvalor/crear', component: EpParametrosubvalorCrearComponent},
  {path: 'entrenador/parametro/parametrosubvalor/detalle/:id', component: EpParametrosubvalorDetalleComponent},
  {path: 'entrenador/parametro/parametrosubvalor/editar/:id', component: EpParametrosubvalorEditarComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContentComponent,
    EjercicioListaComponent,
    EntrenadorListaComponent,
    EntrenadorEjercicioComponent,
    EntrenadorParametroComponent,
    EntrenadorMedidaComponent,
    EntrenadorParametroParametroComponent,
    EntrenadorParametroParametrogrupoComponent,
    EntrenadorParametroParametrovalorComponent,
    EntrenadorParametroParametrosubvalorComponent,
    EntrenadorMedidaMedidagrupoComponent,
    EntrenadorMedidaMedidaunidadComponent,
    EntrenadorMedidaMedidavalorComponent,
    EntrenadorComponent,
    RutinaListaComponent,
    EjercicioComponent,
    EEjercicioBuscarComponent,
    EEjercicioDetalleComponent,
    EEjercicioCrearComponent,
    EEjercicioEditarComponent,
    LoginComponent,
    LoginStatusComponent,
    EpParametroBuscarComponent,
    EpParametroCrearComponent,
    EpParametroDetalleComponent,
    EpParametroEditarComponent,
    EpParametrogrupoBuscarComponent,
    EpParametrogrupoCrearComponent,
    EpParametrogrupoDetalleComponent,
    EpParametrogrupoEditarComponent,
    EpParametrovalorBuscarComponent,
    EpParametrovalorCrearComponent,
    EpParametrovalorDetalleComponent,
    EpParametrovalorEditarComponent,
    EpParametrosubvalorBuscarComponent,
    EpParametrosubvalorCrearComponent,
    EpParametrosubvalorDetalleComponent,
    EpParametrosubvalorEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgbModule,
    OktaAuthModule
  ],
  providers: [{ provide: OKTA_CONFIG, useValue: oktaConfig }],
  bootstrap: [AppComponent]
})
export class AppModule { }

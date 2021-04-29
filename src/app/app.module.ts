import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MainContentComponent } from './components/main-content/main-content.component';
import { EjercicioListaComponent } from './components/ejercicio-lista/ejercicio-lista.component';
import { EntrenadorListaComponent } from './components/entrenador-lista/entrenador-lista.component';
import { HttpClientModule } from '@angular/common/http';
import {Routes, RouterModule} from '@angular/router';
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
import { EEjercicioEditarComponent } from './components/e-ejercicio-editar/e-ejercicio-editar.component'

const routes: Routes = [
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
    EEjercicioEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

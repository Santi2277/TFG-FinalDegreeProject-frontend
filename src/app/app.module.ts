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
    EjercicioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

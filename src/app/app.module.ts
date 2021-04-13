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

const routes: Routes = [
  {path: 'ejercicios', component: EjercicioListaComponent},
  {path: 'main', component: MainContentComponent},
  {path: '', redirectTo: '/main', pathMatch: 'full'},
  {path: '**', redirectTo: '/main', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MainContentComponent,
    EjercicioListaComponent,
    EntrenadorListaComponent
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

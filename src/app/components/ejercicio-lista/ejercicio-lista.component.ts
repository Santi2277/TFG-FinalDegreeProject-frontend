import { Component, OnInit } from '@angular/core';
import { EjercicioService } from 'src/app/services/ejercicio.service';
import { Ejercicio } from 'src/app/common/ejercicio';

@Component({
  selector: 'app-ejercicio-lista',
  templateUrl: './ejercicio-lista.component.html',
  styleUrls: ['./ejercicio-lista.component.css']
})
export class EjercicioListaComponent implements OnInit {

  ejercicios: Ejercicio[];
  
  constructor(private ejercicioService: EjercicioService) { }

  ngOnInit() {
    this.listEjercicios();
  }

  listEjercicios() {
    this.ejercicioService.getEjercicioList().subscribe(
      data => {
        this.ejercicios = data;
      }
    )
  }

}

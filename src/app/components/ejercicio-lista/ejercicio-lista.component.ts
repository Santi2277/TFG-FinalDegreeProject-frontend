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

  //pagination
  thePageNumber: number = 1;
  thePageSize: number = 20;
  theTotalElements: number = 0;
  
  constructor(private ejercicioService: EjercicioService) { }

  ngOnInit() {
    this.listEjercicios();
  }

  listEjercicios() {
    this.ejercicioService.getEjercicioList(this.thePageNumber - 1, this.thePageSize).subscribe(
      data => {
        this.ejercicios = data._embedded.ejercicios;
        this.thePageNumber = data.page.number + 1;
        this.thePageSize = data.page.size;
        this.theTotalElements = data.page.totalElements;
      }
    )
  }

}

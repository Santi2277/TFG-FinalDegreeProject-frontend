import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Ejercicio } from 'src/app/common/ejercicio';
import { EjercicioService } from 'src/app/services/ejercicio.service';

@Component({
  selector: 'app-e-ejercicio-editar',
  templateUrl: './e-ejercicio-editar.component.html',
  styleUrls: ['./e-ejercicio-editar.component.css']
})
export class EEjercicioEditarComponent implements OnInit {

  ejercicio: Ejercicio = new Ejercicio();

  constructor(private ejercicioService: EjercicioService, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.handleEjercicioDetails();
    })

  }


  handleEjercicioDetails() {

    // get the "id" param string. convert string to a number using the "+" 
    const ejercicioId: string = ""+this.route.snapshot.paramMap.get('id');
    const ejercicioIdNumber: number = +ejercicioId;

    this.ejercicioService.getEjercicio(ejercicioIdNumber).subscribe(
      data => {
        this.ejercicio = data;
      }
    )
  }



  

}

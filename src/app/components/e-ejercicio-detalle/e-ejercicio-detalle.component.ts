import { Component, OnInit } from '@angular/core';
import { Ejercicio } from 'src/app/common/ejercicio';
import { EjercicioService } from 'src/app/services/ejercicio.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-e-ejercicio-detalle',
  templateUrl: './e-ejercicio-detalle.component.html',
  styleUrls: ['./e-ejercicio-detalle.component.css']
})
export class EEjercicioDetalleComponent implements OnInit {

  ejercicio: Ejercicio = new Ejercicio();

  constructor(private ejercicioService: EjercicioService, private route: ActivatedRoute, private router: Router) { }

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

  testButton(){
    console.log("antes de borrar");
    this.ejercicioService.deleteEjercicio(this.ejercicio.id).subscribe({
      next: response => {
        alert(`Ejercicio borrado`);
        //redirect
        this.router.navigateByUrl('/entrenador/ejercicio/buscar');

      },
      error: err => {
        alert(`Hubo un error: ${err.message}`);
      }
    }
  );;
  }

  borrarParametroDeEjercicio(parametroListaId: number){
    console.log("antes de borrar parametro de ejercicio. Id parametro lista: "+parametroListaId);
    



  }

}

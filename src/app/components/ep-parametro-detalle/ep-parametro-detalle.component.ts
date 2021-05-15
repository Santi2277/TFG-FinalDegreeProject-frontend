import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Parametro } from 'src/app/common/parametro';
import { ParametroService } from 'src/app/services/parametro.service';

@Component({
  selector: 'app-ep-parametro-detalle',
  templateUrl: './ep-parametro-detalle.component.html',
  styleUrls: ['./ep-parametro-detalle.component.css']
})
export class EpParametroDetalleComponent implements OnInit {

  parametro: Parametro = new Parametro();

  constructor(private parametroService: ParametroService, private route: ActivatedRoute, private router: Router) { }



  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.handleParametroDetails();
    })

  }



  handleParametroDetails() {

    // get the "id" param string. convert string to a number using the "+" 
    const parametroId: string = ""+this.route.snapshot.paramMap.get('id');
    const parametroIdNumber: number = +parametroId;

    this.parametroService.getParametro(parametroIdNumber).subscribe(
      data => {
        this.parametro = data;
      }
    )
  }


  testButton(){
    console.log("antes de borrar");
    this.parametroService.deleteParametro(this.parametro.id).subscribe({
      next: response => {
        alert(`Parametro borrado`);
        //redirect
        this.router.navigateByUrl('/entrenador/parametro/parametro/buscar');

      },
      error: err => {
        alert(`Hubo un error: ${err.message}`);
      }
    }
  );;
  }




}

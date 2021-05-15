import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParametroLista } from 'src/app/common/parametrolista';
import { ParametroListaService } from 'src/app/services/parametrolista.service';

@Component({
  selector: 'app-ep-parametrovalor-detalle',
  templateUrl: './ep-parametrovalor-detalle.component.html',
  styleUrls: ['./ep-parametrovalor-detalle.component.css']
})
export class EpParametrovalorDetalleComponent implements OnInit {

  parametrovalor: ParametroLista;

  constructor(private parametroListaService: ParametroListaService, private route: ActivatedRoute, private router: Router) { }



  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.handleParametroValorDetails();
    })

  }

  handleParametroValorDetails() {

    // get the "id" param string. convert string to a number using the "+" 
    const parametroValorId: string = ""+this.route.snapshot.paramMap.get('id');
    const parametroValorIdNumber: number = +parametroValorId;

    this.parametroListaService.getParametroLista(parametroValorIdNumber).subscribe(
      data => {
        this.parametrovalor = data;
        
      }
    )
  }




  testButton(){
    console.log("antes de borrar");
    this.parametroListaService.deleteParametroLista(this.parametrovalor.id).subscribe({
      next: response => {
        alert(`Parametro Valor borrado`);
        //redirect
        this.router.navigateByUrl('/entrenador/parametro/parametrovalor/buscar');

      },
      error: err => {
        alert(`Hubo un error: ${err.message}`);
      }
    }
  );;
  }





}

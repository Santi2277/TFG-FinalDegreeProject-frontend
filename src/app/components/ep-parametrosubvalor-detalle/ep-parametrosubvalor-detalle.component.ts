import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParametroSublista } from 'src/app/common/parametrosublista';
import { ParametroSublistaService } from 'src/app/services/parametrosublista.service';

@Component({
  selector: 'app-ep-parametrosubvalor-detalle',
  templateUrl: './ep-parametrosubvalor-detalle.component.html',
  styleUrls: ['./ep-parametrosubvalor-detalle.component.css']
})
export class EpParametrosubvalorDetalleComponent implements OnInit {

  parametrosubvalor: ParametroSublista;

  constructor(private parametroSublistaService: ParametroSublistaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.handleParametroSubvalorDetails();
    })

  }



  handleParametroSubvalorDetails() {

    // get the "id" param string. convert string to a number using the "+" 
    const parametroSubvalorId: string = ""+this.route.snapshot.paramMap.get('id');
    const parametroSubvalorIdNumber: number = +parametroSubvalorId;

    this.parametroSublistaService.getParametroSublista(parametroSubvalorIdNumber).subscribe(
      data => {
        this.parametrosubvalor = data;
        
      }
    )
  }




  testButton(){
    console.log("antes de borrar");
    this.parametroSublistaService.deleteParametroSublista(this.parametrosubvalor.id).subscribe({
      next: response => {
        alert(`Parametro Subvalor borrado`);
        //redirect
        this.router.navigateByUrl('/entrenador/parametro/parametrosubvalor/buscar');

      },
      error: err => {
        alert(`Hubo un error: ${err.message}`);
      }
    }
  );;
  }






}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ParametroGrupo } from 'src/app/common/parametrogrupo';
import { ParametroGrupoService } from 'src/app/services/parametrogrupo.service';

@Component({
  selector: 'app-ep-parametrogrupo-detalle',
  templateUrl: './ep-parametrogrupo-detalle.component.html',
  styleUrls: ['./ep-parametrogrupo-detalle.component.css']
})
export class EpParametrogrupoDetalleComponent implements OnInit {

  parametrogrupo: ParametroGrupo;

  constructor(private parametroGrupoService: ParametroGrupoService, private route: ActivatedRoute, private router: Router) { }



  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.handleParametroGrupoDetails();
    })

  }



  handleParametroGrupoDetails() {

    // get the "id" param string. convert string to a number using the "+" 
    const parametroGrupoId: string = ""+this.route.snapshot.paramMap.get('id');
    const parametroGrupoIdNumber: number = +parametroGrupoId;

    this.parametroGrupoService.getParametroGrupo(parametroGrupoIdNumber).subscribe(
      data => {
        this.parametrogrupo = data;
        
      }
    )
  }




  testButton(){
    console.log("antes de borrar");
    this.parametroGrupoService.deleteParametroGrupo(this.parametrogrupo.id).subscribe({
      next: response => {
        alert(`Parametro Grupo borrado`);
        //redirect
        this.router.navigateByUrl('/entrenador/parametro/parametrogrupo/buscar');

      },
      error: err => {
        alert(`Hubo un error: ${err.message}`);
      }
    }
  );;
  }



}

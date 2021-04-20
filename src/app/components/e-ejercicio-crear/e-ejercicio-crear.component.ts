import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EjercicioGrupo } from 'src/app/common/ejerciciogrupo';
import { EjercicioTransfer } from 'src/app/common/ejerciciotransfer';
import { Perfil } from 'src/app/common/perfil';
import { EjercicioService } from 'src/app/services/ejercicio.service';
import { EjercicioGrupoService } from 'src/app/services/ejerciciogrupo.service';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-e-ejercicio-crear',
  templateUrl: './e-ejercicio-crear.component.html',
  styleUrls: ['./e-ejercicio-crear.component.css']
})
export class EEjercicioCrearComponent implements OnInit {

  perfiles: Perfil[];
  ejercicioGrupos: EjercicioGrupo[];
  baseUrl: string = "http://localhost:8080/api/";


  constructor(private ejercicioService: EjercicioService,
              private router: Router,
              private perfilService: PerfilService,
              private ejercicioGrupoService: EjercicioGrupoService) { }

  ngOnInit() {


    //initialize perfiles list
    this.listPerfiles();

    //initialize ejercicio grupo list
    this.listEjercicioGrupos();


    

  }



  listPerfiles() {
    this.perfilService.getPerfilList().subscribe(
      data => {
        this.perfiles = data;
      }
    )
  }

  listEjercicioGrupos() {
    this.ejercicioGrupoService.getEjercicioGrupoList().subscribe(
      data => {
        this.ejercicioGrupos = data._embedded.ejercicioGrupoes;
        
      }
    )
  }


  testButton(){

    //test hardcoded creation, should be on a method appart
    //and called on click a button or onsubmit form with
    //not hardcoded fields
    var ejercicio: EjercicioTransfer = new EjercicioTransfer();
    ejercicio.nombre = "Ejercicio de prueba Frontend";
    ejercicio.ejercicioGrupo = this.baseUrl+"ejerciciogrupos/"+this.ejercicioGrupos[0].id;
    ejercicio.creador = this.baseUrl+"perfiles/"+this.perfiles[0].id;



    this.ejercicioService.postEjercicio(ejercicio).subscribe({
      next: response => {
        alert(`Exercise has been posted.\nExercise name: ${response.nombre}`);

      },
      error: err => {
        alert(`There was an error: ${err.message}`);
      }
    }
  );

  }




}

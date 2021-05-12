import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  checkoutFormGroup: FormGroup;


  constructor(private ejercicioService: EjercicioService,
              private router: Router,
              private perfilService: PerfilService,
              private ejercicioGrupoService: EjercicioGrupoService,
              private formBuilder: FormBuilder) { }

  ngOnInit() {


    //initialize perfiles list
    this.listPerfiles();

    //initialize ejercicio grupo list
    this.listEjercicioGrupos();

    // build the form
    this.checkoutFormGroup = this.formBuilder.group({
      general: this.formBuilder.group({
        nombre: [''],
        descripcioncorta: [''],
        descripcionlarga: [''],
        ejerciciogrupo: [''],
        creador: ['']
        
      })
      
      
      
    })

    

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


  onSubmit(){

    //logs
    console.log("Manejando el botón de submit");
    console.log("Nombre: "+ this.checkoutFormGroup.get('general.nombre')?.value);
    console.log("Descripcion corta: "+ this.checkoutFormGroup.get('general.descripcioncorta')?.value);
    console.log("Descripcion larga: "+ this.checkoutFormGroup.get('general.descripcionlarga')?.value);
    console.log("Ejercicio grupo: "+ this.checkoutFormGroup.get('general.ejerciciogrupo')?.value);
    console.log("Creador: "+ this.checkoutFormGroup.get('general.creador')?.value);

    //get form values
    var nombre : string = this.checkoutFormGroup.get('general.nombre')?.value;
    var descripcioncorta : string = this.checkoutFormGroup.get('general.descripcioncorta')?.value;
    if(descripcioncorta == ""){
      descripcioncorta = "Por describir";
    }

    var descripcionlarga : string = this.checkoutFormGroup.get('general.descripcionlarga')?.value;
    if(descripcionlarga == ""){
      descripcionlarga = "Por describir";
    }
    var ejerciciogrupo : number = this.checkoutFormGroup.get('general.ejerciciogrupo')?.value;
    var creador : number = this.checkoutFormGroup.get('general.creador')?.value;

    //test hardcoded creation, should be on a method appart
    //and called on click a button or onsubmit form with
    //not hardcoded fields
    var ejercicio: EjercicioTransfer = new EjercicioTransfer();
    ejercicio.nombre = nombre;
    ejercicio.descripcionCorta = descripcioncorta;
    ejercicio.descripcionLarga = descripcionlarga;
    ejercicio.ejercicioGrupo = this.baseUrl+"ejerciciogrupos/"+ejerciciogrupo;
    ejercicio.creador = this.baseUrl+"perfiles/"+creador;



    this.ejercicioService.postEjercicio(ejercicio).subscribe({
      next: response => {
        alert(`Ejercicio creado con éxito.\nNombre: ${response.nombre}`);
        //redirect
      this.router.navigateByUrl('/entrenador/ejercicio/detalle/'+response.id);

      },
      error: err => {
        alert(`Hubo un error: ${err.message}`);
      }
    }
  );

  }




}

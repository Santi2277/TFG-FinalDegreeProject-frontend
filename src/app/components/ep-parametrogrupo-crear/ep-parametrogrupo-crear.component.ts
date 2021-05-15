import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Parametro } from 'src/app/common/parametro';
import { Perfil } from 'src/app/common/perfil';
import { ParametroGrupoTransfer } from 'src/app/common/transfer/parametrogrupotransfer';
import { ParametroService } from 'src/app/services/parametro.service';
import { ParametroGrupoService } from 'src/app/services/parametrogrupo.service';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-ep-parametrogrupo-crear',
  templateUrl: './ep-parametrogrupo-crear.component.html',
  styleUrls: ['./ep-parametrogrupo-crear.component.css']
})
export class EpParametrogrupoCrearComponent implements OnInit {

  perfiles: Perfil[];
  parametros: Parametro[];
  baseUrl: string = "http://localhost:8080/api/";

  checkoutFormGroup: FormGroup;

  constructor(private parametroGrupoService: ParametroGrupoService,
    private router: Router,
    private perfilService: PerfilService,
    private parametroService: ParametroService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    //initialize perfiles list
    this.listPerfiles();

    //initialize ejercicio grupo list
    this.listParametros();

    // build the form
    this.checkoutFormGroup = this.formBuilder.group({
      general: this.formBuilder.group({
        nombre: [''],
        diminutivo: [''],
        info: [''],
        parametro: [''],
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

  listParametros() {
    this.parametroService.getParametroList().subscribe(
      data => {
        this.parametros = data;
      }
    )
  }



  onSubmit(){

    //logs
    console.log("Manejando el botón de submit");
    console.log("Nombre: "+ this.checkoutFormGroup.get('general.nombre')?.value);
    console.log("Diminutivo: "+ this.checkoutFormGroup.get('general.diminutivo')?.value);
    console.log("Info: "+ this.checkoutFormGroup.get('general.info')?.value);
    console.log("Parametro: "+ this.checkoutFormGroup.get('general.parametro')?.value);
    console.log("Creador: "+ this.checkoutFormGroup.get('general.creador')?.value);

    //get form values
    var nombre : string = this.checkoutFormGroup.get('general.nombre')?.value;
    var diminutivo : string = this.checkoutFormGroup.get('general.diminutivo')?.value;
    var info : string = this.checkoutFormGroup.get('general.info')?.value;
    var parametro : number = this.checkoutFormGroup.get('general.parametro')?.value;
    var creador : number = this.checkoutFormGroup.get('general.creador')?.value;

    //test hardcoded creation, should be on a method appart
    //and called on click a button or onsubmit form with
    //not hardcoded fields
    var parametroGrupo: ParametroGrupoTransfer = new ParametroGrupoTransfer();
    parametroGrupo.nombre = nombre;
    parametroGrupo.diminutivo = diminutivo;
    parametroGrupo.info = info;
    parametroGrupo.parametro = this.baseUrl+"parametros/"+parametro;
    parametroGrupo.creador = this.baseUrl+"perfiles/"+creador;



    this.parametroGrupoService.postParametroGrupo(parametroGrupo).subscribe({
      next: response => {
        alert(`Parametro Grupo creado con éxito.\nNombre: ${response.nombre}`);
        //redirect
      this.router.navigateByUrl('/entrenador/parametro/parametrogrupo/detalle/'+response.id);

      },
      error: err => {
        alert(`Hubo un error: ${err.message}`);
      }
    }
  );

  }







}

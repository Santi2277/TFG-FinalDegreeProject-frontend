import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ParametroGrupo } from 'src/app/common/parametrogrupo';
import { Perfil } from 'src/app/common/perfil';
import { ParametroListaTransfer } from 'src/app/common/transfer/parametrolistatransfer';
import { ParametroGrupoService } from 'src/app/services/parametrogrupo.service';
import { ParametroListaService } from 'src/app/services/parametrolista.service';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-ep-parametrovalor-crear',
  templateUrl: './ep-parametrovalor-crear.component.html',
  styleUrls: ['./ep-parametrovalor-crear.component.css']
})
export class EpParametrovalorCrearComponent implements OnInit {

  perfiles: Perfil[];
  parametroGrupos: ParametroGrupo[];
  baseUrl: string = "http://localhost:8080/api/";

  checkoutFormGroup: FormGroup;

  constructor(private parametroGrupoService: ParametroGrupoService,
    private router: Router,
    private perfilService: PerfilService,
    private parametroListaService: ParametroListaService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    //initialize perfiles list
    this.listPerfiles();

    //initialize ejercicio grupo list
    this.listParametroGrupos();

    // build the form
    this.checkoutFormGroup = this.formBuilder.group({
      general: this.formBuilder.group({
        nombre: [''],
        diminutivo: [''],
        info: [''],
        parametrogrupo: [''],
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
  listParametroGrupos() {
    this.parametroGrupoService.getParametroGrupoList().subscribe(
      data => {
        this.parametroGrupos = data;
      }
    )
  }




  onSubmit(){

    //logs
    console.log("Manejando el botón de submit");
    console.log("Nombre: "+ this.checkoutFormGroup.get('general.nombre')?.value);
    console.log("Diminutivo: "+ this.checkoutFormGroup.get('general.diminutivo')?.value);
    console.log("Info: "+ this.checkoutFormGroup.get('general.info')?.value);
    console.log("ParametroGrupo: "+ this.checkoutFormGroup.get('general.parametrogrupo')?.value);
    console.log("Creador: "+ this.checkoutFormGroup.get('general.creador')?.value);

    //get form values
    var nombre : string = this.checkoutFormGroup.get('general.nombre')?.value;
    var diminutivo : string = this.checkoutFormGroup.get('general.diminutivo')?.value;
    var info : string = this.checkoutFormGroup.get('general.info')?.value;
    var parametrogrupo : number = this.checkoutFormGroup.get('general.parametrogrupo')?.value;
    var creador : number = this.checkoutFormGroup.get('general.creador')?.value;

    //test hardcoded creation, should be on a method appart
    //and called on click a button or onsubmit form with
    //not hardcoded fields
    var parametroValor: ParametroListaTransfer = new ParametroListaTransfer();
    parametroValor.nombre = nombre;
    parametroValor.diminutivo = diminutivo;
    parametroValor.info = info;
    parametroValor.parametroGrupo = this.baseUrl+"parametrogrupos/"+parametrogrupo;
    parametroValor.creador = this.baseUrl+"perfiles/"+creador;



    this.parametroListaService.postParametroLista(parametroValor).subscribe({
      next: response => {
        alert(`Parametro Valor creado con éxito.\nNombre: ${response.nombre}`);
        //redirect
      this.router.navigateByUrl('/entrenador/parametro/parametrovalor/detalle/'+response.id);

      },
      error: err => {
        alert(`Hubo un error: ${err.message}`);
      }
    }
  );

  }




}

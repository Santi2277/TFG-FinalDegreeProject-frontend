import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ParametroGrupo } from 'src/app/common/parametrogrupo';
import { ParametroLista } from 'src/app/common/parametrolista';
import { Perfil } from 'src/app/common/perfil';
import { ParametroSublistaTransfer } from 'src/app/common/transfer/parametrosublistatransfer';
import { ParametroGrupoService } from 'src/app/services/parametrogrupo.service';
import { ParametroListaService } from 'src/app/services/parametrolista.service';
import { ParametroSublistaService } from 'src/app/services/parametrosublista.service';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-ep-parametrosubvalor-crear',
  templateUrl: './ep-parametrosubvalor-crear.component.html',
  styleUrls: ['./ep-parametrosubvalor-crear.component.css']
})
export class EpParametrosubvalorCrearComponent implements OnInit {

  perfiles: Perfil[];
  parametroGrupos: ParametroGrupo[];
  parametroValores: ParametroLista[];
  baseUrl: string = "http://localhost:8080/api/";

  checkoutFormGroup: FormGroup;

  constructor(private parametroGrupoService: ParametroGrupoService,
    private router: Router,
    private perfilService: PerfilService,
    private parametroListaService: ParametroListaService,
    private parametroSublistaService: ParametroSublistaService,
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
        parametrovalor: [''],
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
  listParametroListas(value: number) {
    this.parametroListaService.getParametroListaByFatherList(value).subscribe(
      data => {
        this.parametroValores = data;
      }
    )
  }


  onChangePG(){
    var value : string = ""+this.checkoutFormGroup.get('general.parametrogrupo')?.value;
    if(value!=="" && value !== "undefined"){
      //update parameter value list 1
      console.log("onChangePG - value = "+value);
      this.listParametroListas(Number(value));
      
    }else{
      //leave the parameter value list 1 blank
      this.parametroValores = [];
      this.checkoutFormGroup.get('general.parametrovalor')?.setValue('');
      
    }
    
  }






  onSubmit(){

    //logs
    console.log("Manejando el botón de submit");
    console.log("Nombre: "+ this.checkoutFormGroup.get('general.nombre')?.value);
    console.log("Diminutivo: "+ this.checkoutFormGroup.get('general.diminutivo')?.value);
    console.log("Info: "+ this.checkoutFormGroup.get('general.info')?.value);
    console.log("ParametroValor: "+ this.checkoutFormGroup.get('general.parametrovalor')?.value);
    console.log("Creador: "+ this.checkoutFormGroup.get('general.creador')?.value);

    //get form values
    var nombre : string = this.checkoutFormGroup.get('general.nombre')?.value;
    var diminutivo : string = this.checkoutFormGroup.get('general.diminutivo')?.value;
    var info : string = this.checkoutFormGroup.get('general.info')?.value;
    var parametrovalor : number = this.checkoutFormGroup.get('general.parametrovalor')?.value;
    var creador : number = this.checkoutFormGroup.get('general.creador')?.value;

    //test hardcoded creation, should be on a method appart
    //and called on click a button or onsubmit form with
    //not hardcoded fields
    var parametroSubvalor: ParametroSublistaTransfer = new ParametroSublistaTransfer();
    parametroSubvalor.nombre = nombre;
    parametroSubvalor.diminutivo = diminutivo;
    parametroSubvalor.info = info;
    parametroSubvalor.parametroLista = this.baseUrl+"parametrolistas/"+parametrovalor;
    parametroSubvalor.creador = this.baseUrl+"perfiles/"+creador;



    this.parametroSublistaService.postParametroSublista(parametroSubvalor).subscribe({
      next: response => {
        alert(`Parametro Subvalor creado con éxito.\nNombre: ${response.nombre}`);
        //redirect
      this.router.navigateByUrl('/entrenador/parametro/parametrosubvalor/detalle/'+response.id);

      },
      error: err => {
        alert(`Hubo un error: ${err.message}`);
      }
    }
  );

  }




}

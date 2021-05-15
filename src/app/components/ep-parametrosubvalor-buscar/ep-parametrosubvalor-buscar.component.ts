import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Parametro } from 'src/app/common/parametro';
import { ParametroGrupo } from 'src/app/common/parametrogrupo';
import { ParametroLista } from 'src/app/common/parametrolista';
import { ParametroSublista } from 'src/app/common/parametrosublista';
import { ParametroService } from 'src/app/services/parametro.service';
import { ParametroGrupoService } from 'src/app/services/parametrogrupo.service';
import { ParametroListaService } from 'src/app/services/parametrolista.service';
import { ParametroSublistaService } from 'src/app/services/parametrosublista.service';

@Component({
  selector: 'app-ep-parametrosubvalor-buscar',
  templateUrl: './ep-parametrosubvalor-buscar.component.html',
  styleUrls: ['./ep-parametrosubvalor-buscar.component.css']
})
export class EpParametrosubvalorBuscarComponent implements OnInit {

  checkoutFormGroup: FormGroup;

  parametros: Parametro[];
  parametroGrupos: ParametroGrupo[];
  parametroValores: ParametroLista[];
  parametroSubvalores: ParametroSublista[];

  //pagination
  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 0;

  constructor(private parametroSublistaService: ParametroSublistaService, private parametroListaService: ParametroListaService, private parametroGrupoService: ParametroGrupoService, private parametroService: ParametroService, private formBuilder: FormBuilder) { }





  ngOnInit(): void {

    //initialize parametros list
    this.listParametros();



    //initialize parametros subvalores list
    this.listParametroSubvalorPag();

    // build the form
    this.checkoutFormGroup = this.formBuilder.group({
      general: this.formBuilder.group({
        nombre: [''],
        diminutivo: [''],
        parametro: [''],
        parametrogrupo: [''],
        parametrovalor: ['']
      })
    })



  }






  listParametros() {
    this.parametroService.getParametroList().subscribe(
      data => {
        this.parametros = data;
      }
    )
  }

  listParametroGrupos(value: number) {
    this.parametroGrupoService.getParametroGrupoByFatherList(value).subscribe(
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


  listParametroSubvalorPag() {
    this.parametroSublistaService.getParametroSublistaPagList(this.thePageNumber - 1, this.thePageSize).subscribe(
      data => {
        this.parametroSubvalores = data._embedded.parametroSublistas;
        this.thePageNumber = data.page.number + 1;
        this.thePageSize = data.page.size;
        this.theTotalElements = data.page.totalElements;
      }
    )
  }


  listParametroSubvalorAdvanced(nombre: string, diminutivo: string, parametro: string, parametrogrupo: string, parametrovalor: string) {
    this.parametroSublistaService.getParametroSublistaAdvancedList(nombre, diminutivo, parametro, parametrogrupo, parametrovalor, this.thePageNumber - 1, this.thePageSize).subscribe(
      data => {
        this.parametroSubvalores = data._embedded.parametroSublistas;
        this.thePageNumber = data.page.number + 1;
        this.thePageSize = data.page.size;
        this.theTotalElements = data.page.totalElements;
      }
    )
  }






  onSubmit(){
    console.log("Manejando el botón de submit");
    console.log("Nombre: "+ this.checkoutFormGroup.get('general.nombre')?.value);
    console.log("Diminutivo: "+this.checkoutFormGroup.get('general.diminutivo')?.value);
    console.log("Parametro: "+this.checkoutFormGroup.get('general.parametro')?.value);
    console.log("ParametroGrupo: "+this.checkoutFormGroup.get('general.parametrogrupo')?.value);
    console.log("ParametroValor: "+this.checkoutFormGroup.get('general.parametrovalor')?.value);
    
    var nombre : string = this.checkoutFormGroup.get('general.nombre')?.value;
    var diminutivo : string = this.checkoutFormGroup.get('general.diminutivo')?.value;
    var parametro : string = this.checkoutFormGroup.get('general.parametro')?.value;
    var parametrogrupo : string = this.checkoutFormGroup.get('general.parametrogrupo')?.value;
    var parametrovalor : string = this.checkoutFormGroup.get('general.parametrovalor')?.value.id;
     
    //don't pass undefined, pass "" instead
    if(parametro === undefined){
      parametro = "";
    }
    if(parametrogrupo === undefined){
      parametrogrupo = "";
    }
    if(parametrovalor === undefined){
      parametrovalor = "";
    }

    console.log("ONSUBMIT part 1 -> nombre: "+nombre+" descr: "+diminutivo+" param: "+parametro+" param grupo: "+parametrogrupo+" param valor: "+parametrovalor);

    this.listParametroSubvalorAdvanced(nombre, diminutivo, parametro, parametrogrupo, parametrovalor);

  }





  onChangeP(){
    var value : string = ""+this.checkoutFormGroup.get('general.parametro')?.value;
    if(value!==""){
      //update parameter group list
      console.log("onChangeP1 - value = "+value);
      this.listParametroGrupos(Number(value));
      
    }else{
      //leave the parameter group list 1 blank
      this.parametroGrupos = [];
      this.checkoutFormGroup.get('general.parametrogrupo')?.setValue('');
    }

    this.parametroValores = [];
    this.checkoutFormGroup.get('general.parametrovalor')?.setValue('');
    
    
    
    
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




}

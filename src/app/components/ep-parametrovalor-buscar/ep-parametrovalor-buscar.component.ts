import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Parametro } from 'src/app/common/parametro';
import { ParametroGrupo } from 'src/app/common/parametrogrupo';
import { ParametroLista } from 'src/app/common/parametrolista';
import { ParametroService } from 'src/app/services/parametro.service';
import { ParametroGrupoService } from 'src/app/services/parametrogrupo.service';
import { ParametroListaService } from 'src/app/services/parametrolista.service';

@Component({
  selector: 'app-ep-parametrovalor-buscar',
  templateUrl: './ep-parametrovalor-buscar.component.html',
  styleUrls: ['./ep-parametrovalor-buscar.component.css']
})
export class EpParametrovalorBuscarComponent implements OnInit {

  checkoutFormGroup: FormGroup;

  parametros: Parametro[];
  parametroGrupos: ParametroGrupo[];
  parametroValores: ParametroLista[];

  //pagination
  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 0;

  constructor(private parametroListaService: ParametroListaService, private parametroGrupoService: ParametroGrupoService, private parametroService: ParametroService, private formBuilder: FormBuilder) { }



  ngOnInit(): void {

    //initialize parametros list
    this.listParametros();



    //initialize parametros valores list
    this.listParametroValorPag();

    // build the form
    this.checkoutFormGroup = this.formBuilder.group({
      general: this.formBuilder.group({
        nombre: [''],
        diminutivo: [''],
        parametro: [''],
        parametrogrupo: ['']
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



  listParametroValorPag() {
    this.parametroListaService.getParametroListaPagList(this.thePageNumber - 1, this.thePageSize).subscribe(
      data => {
        this.parametroValores = data._embedded.parametroListas;
        this.thePageNumber = data.page.number + 1;
        this.thePageSize = data.page.size;
        this.theTotalElements = data.page.totalElements;
      }
    )
  }


  listParametroValorAdvanced(nombre: string, diminutivo: string, parametro: string, parametrogrupo: string) {
    this.parametroListaService.getParametroListaAdvancedList(nombre, diminutivo, parametro, parametrogrupo, this.thePageNumber - 1, this.thePageSize).subscribe(
      data => {
        this.parametroValores = data._embedded.parametroListas;
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
    

    var nombre : string = this.checkoutFormGroup.get('general.nombre')?.value;
    var diminutivo : string = this.checkoutFormGroup.get('general.diminutivo')?.value;
    var parametro : string = this.checkoutFormGroup.get('general.parametro')?.value;
    var parametrogrupo : string = this.checkoutFormGroup.get('general.parametrogrupo')?.value;
     
    //don't pass undefined, pass "" instead
    if(parametro === undefined){
      parametro = "";
    }
    if(parametrogrupo === undefined){
      parametrogrupo = "";
    }

    console.log("ONSUBMIT part 1 -> nombre: "+nombre+" descr: "+diminutivo+" param: "+parametro+" param grupo: "+parametrogrupo);


    this.listParametroValorAdvanced(nombre, diminutivo, parametro, parametrogrupo);



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
    

  }




}

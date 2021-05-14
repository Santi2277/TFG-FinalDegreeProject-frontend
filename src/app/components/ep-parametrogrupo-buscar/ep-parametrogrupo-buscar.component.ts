import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Parametro } from 'src/app/common/parametro';
import { ParametroGrupo } from 'src/app/common/parametrogrupo';
import { ParametroService } from 'src/app/services/parametro.service';
import { ParametroGrupoService } from 'src/app/services/parametrogrupo.service';

@Component({
  selector: 'app-ep-parametrogrupo-buscar',
  templateUrl: './ep-parametrogrupo-buscar.component.html',
  styleUrls: ['./ep-parametrogrupo-buscar.component.css']
})
export class EpParametrogrupoBuscarComponent implements OnInit {

  checkoutFormGroup: FormGroup;

  parametros: Parametro[];

  parametroGrupos: ParametroGrupo[];

  //pagination
  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 0;

  constructor(private parametroGrupoService: ParametroGrupoService, private parametroService: ParametroService, private formBuilder: FormBuilder) { }




  ngOnInit(): void {

    //initialize parametros list
    this.listParametros();

    //initialize parametros grupos list
    this.listParametroGruposPag();

    // build the form
    this.checkoutFormGroup = this.formBuilder.group({
      general: this.formBuilder.group({
        nombre: [''],
        diminutivo: [''],
        parametro: ['']
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


  onSubmit(){
    console.log("Manejando el botón de submit");
    console.log("Nombre: "+ this.checkoutFormGroup.get('general.nombre')?.value);
    console.log("Diminutivo: "+this.checkoutFormGroup.get('general.diminutivo')?.value);
    console.log("Parametro: "+this.checkoutFormGroup.get('general.parametro')?.value);
    

    var nombre : string = this.checkoutFormGroup.get('general.nombre')?.value;
    var diminutivo : string = this.checkoutFormGroup.get('general.diminutivo')?.value;
    var parametro : string = this.checkoutFormGroup.get('general.parametro')?.value;
     
    //don't pass undefined, pass "" instead
    if(parametro === undefined){
      parametro = "";
    }

    console.log("ONSUBMIT part 1 -> nombre: "+nombre+" descr: "+diminutivo+" param: "+parametro);


    this.listParametroGruposAdvanced(nombre, diminutivo, parametro);



  }




  listParametroGruposPag() {
    this.parametroGrupoService.getParametroGrupoPagList(this.thePageNumber - 1, this.thePageSize).subscribe(
      data => {
        this.parametroGrupos = data._embedded.parametroGrupoes;
        this.thePageNumber = data.page.number + 1;
        this.thePageSize = data.page.size;
        this.theTotalElements = data.page.totalElements;
      }
    )
  }


  listParametroGruposAdvanced(nombre: string, diminutivo: string, parametro: string) {
    this.parametroGrupoService.getParametroGrupoAdvancedList(nombre, diminutivo, parametro, this.thePageNumber - 1, this.thePageSize).subscribe(
      data => {
        this.parametroGrupos = data._embedded.parametroGrupoes;
        this.thePageNumber = data.page.number + 1;
        this.thePageSize = data.page.size;
        this.theTotalElements = data.page.totalElements;
      }
    )
  }













}

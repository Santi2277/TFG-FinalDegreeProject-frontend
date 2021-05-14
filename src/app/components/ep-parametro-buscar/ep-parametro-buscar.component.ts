import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Parametro } from 'src/app/common/parametro';
import { ParametroService } from 'src/app/services/parametro.service';

@Component({
  selector: 'app-ep-parametro-buscar',
  templateUrl: './ep-parametro-buscar.component.html',
  styleUrls: ['./ep-parametro-buscar.component.css']
})
export class EpParametroBuscarComponent implements OnInit {

  checkoutFormGroup: FormGroup;

  parametros: Parametro[];

  //pagination
  thePageNumber: number = 1;
  thePageSize: number = 10;
  theTotalElements: number = 0;

  constructor(private parametroService: ParametroService, private formBuilder: FormBuilder) { }




  ngOnInit(): void {

    //initialize parametros list
    this.listParametrosPag();
    
    // build the form
    this.checkoutFormGroup = this.formBuilder.group({
      general: this.formBuilder.group({
        nombre: [''],
        diminutivo: ['']
      })
    })

  }




  onSubmit(){
    console.log("Manejando el botón de submit");
    console.log("Nombre: "+ this.checkoutFormGroup.get('general.nombre')?.value);
    console.log("Diminutivo: "+this.checkoutFormGroup.get('general.diminutivo')?.value);
    

    var nombre : string = this.checkoutFormGroup.get('general.nombre')?.value;
    var diminutivo : string = this.checkoutFormGroup.get('general.diminutivo')?.value;
     

    console.log("ONSUBMIT part 1 -> nombre: "+nombre+" descr: "+diminutivo);


    this.listParametrosAdvanced(nombre, diminutivo);



  }




  listParametrosPag() {
    this.parametroService.getParametroPagList(this.thePageNumber - 1, this.thePageSize).subscribe(
      data => {
        this.parametros = data._embedded.parametroes;
        this.thePageNumber = data.page.number + 1;
        this.thePageSize = data.page.size;
        this.theTotalElements = data.page.totalElements;
      }
    )
  }


  listParametrosAdvanced(nombre: string, diminutivo: string) {
    this.parametroService.getParametroAdvancedList(nombre, diminutivo, this.thePageNumber - 1, this.thePageSize).subscribe(
      data => {
        this.parametros = data._embedded.parametroes;
        this.thePageNumber = data.page.number + 1;
        this.thePageSize = data.page.size;
        this.theTotalElements = data.page.totalElements;
      }
    )
  }



  


  




}

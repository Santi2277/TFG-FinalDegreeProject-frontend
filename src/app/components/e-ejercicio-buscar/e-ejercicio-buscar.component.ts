import { Component, OnInit } from '@angular/core';
import { EjercicioService } from 'src/app/services/ejercicio.service';
import { ParametroService } from 'src/app/services/parametro.service';
import { ParametroGrupoService } from 'src/app/services/parametrogrupo.service';
import { ParametroListaService } from 'src/app/services/parametrolista.service';
import { ParametroSublistaService } from 'src/app/services/parametrosublista.service';
import { Ejercicio } from 'src/app/common/ejercicio';
import { Parametro } from 'src/app/common/parametro';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ParametroGrupo } from 'src/app/common/parametrogrupo';
import { ParametroLista } from 'src/app/common/parametrolista';
import { ParametroSublista } from 'src/app/common/parametrosublista';

@Component({
  selector: 'app-e-ejercicio-buscar',
  templateUrl: './e-ejercicio-buscar.component.html',
  styleUrls: ['./e-ejercicio-buscar.component.css']
})
export class EEjercicioBuscarComponent implements OnInit {

  ejercicios: Ejercicio[];

  parametros1: Parametro[];
  parametroGrupos1: ParametroGrupo[];
  parametroValores1: ParametroLista[];
  parametroSubvalores1: ParametroSublista[];

  checkoutFormGroup: FormGroup;

  selectedValue: boolean = false;

  constructor(private ejercicioService: EjercicioService, private parametroService: ParametroService, private parametroGrupoService: ParametroGrupoService, private parametroListaService: ParametroListaService, private parametroSublistaService: ParametroSublistaService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    //initialize exercicise list / table
    this.listEjercicios();

    //initialize parametros list
    this.listParametros1();

    // build the form
    this.checkoutFormGroup = this.formBuilder.group({
      general: this.formBuilder.group({
        nombre: [''],
        descripcion: [''],
        entrenadorNick: ['']
      }),
      parametro1: this.formBuilder.group({
        parametro1: [''],
        parametrogrupo1: [''],
        parametrovalor1: [''],
        parametrosubvalor1: ['']
      }),
      parametro2: this.formBuilder.group({
        parametro2: [''],
        parametrogrupo2: [''],
        parametrovalor2: [''],
        parametrosubvalor2: ['']
      }),
      parametro3: this.formBuilder.group({
        parametro3: [''],
        parametrogrupo3: [''],
        parametrovalor3: [''],
        parametrosubvalor3: ['']
      })
    })

  }

  listEjercicios() {
    this.ejercicioService.getEjercicioList().subscribe(
      data => {
        this.ejercicios = data;
      }
    )
  }

  listParametros1() {
    this.parametroService.getParametroList().subscribe(
      data => {
        this.parametros1 = data;
      }
    )
  }

  listParametroGrupos1(value: number) {
    this.parametroGrupoService.getParametroGrupoByFatherList(value).subscribe(
      data => {
        this.parametroGrupos1 = data;
      }
    )
  }

  listParametroListas1(value: number) {
    this.parametroListaService.getParametroListaByFatherList(value).subscribe(
      data => {
        this.parametroValores1 = data;
      }
    )
  }

  listParametroSublistas1(value: number) {
    this.parametroSublistaService.getParametroSublistaByFatherList(value).subscribe(
      data => {
        this.parametroSubvalores1 = data;
      }
    )
  }



  onSubmit(){
    console.log("Manejando el botón de submit");
    


  }

  onChangeP1(value: string){
    if(value!=="blank"){
      //update parameter group list 1
      console.log("onChangeP1 - value = "+value);
      this.listParametroGrupos1(Number(value));

    }else{
      //leave the parameter group list 1 blank
      this.parametroGrupos1 = [];
      this.parametroValores1 = [];
      this.parametroSubvalores1 = [];
      this.selectedValue = false;

    }
  }

  onChangePG1(value: string){
    if(value!=="blank"){
      //update parameter value list 1
      console.log("onChangePG1 - value = "+value);

      this.listParametroListas1(Number(value));
      
      //bug correction, missing remove parameters but cannot be here
      this.selectedValue = false;
      this.parametroSubvalores1 = [];

    }else{
      //leave the parameter value list 1 blank
      this.parametroValores1 = [];
      this.parametroSubvalores1 = [];
      this.selectedValue = false;
    }
  }

  onChangePV1(value: string){
    
    if(value!=="blank"){
      //update parameter value list 1
      console.log("onChangePV1 - value = "+value);
      var numberSplit = value.split(":"); 
      this.listParametroSublistas1(Number(numberSplit[0]));
      this.selectedValue = true;

    }else{
      //leave the parameter subvalue list 1 blank
      this.parametroSubvalores1 = [];
      this.selectedValue = false;

    }
  }

}

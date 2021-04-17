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

  listParametroGrupos1() {
    this.parametroGrupoService.getParametroGrupoList().subscribe(
      data => {
        this.parametroGrupos1 = data;
      }
    )
  }



  onSubmit(){
    console.log("Manejando el botón de submit");
    


  }

  onChangeP1(value: string){
    if(value!=="blank"){
      //update parameter group list 1
      console.log("Modificando parametro grupos 1 - después de cambio en parametros 1 selección");
      this.listParametroGrupos1();
      

    }else{
      //leave the parameter group list 1 blank

    }
    
    
  }

}

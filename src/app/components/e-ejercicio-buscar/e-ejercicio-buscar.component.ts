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

  parametros2: Parametro[];
  parametroGrupos2: ParametroGrupo[];
  parametroValores2: ParametroLista[];
  parametroSubvalores2: ParametroSublista[];

  parametros3: Parametro[];
  parametroGrupos3: ParametroGrupo[];
  parametroValores3: ParametroLista[];
  parametroSubvalores3: ParametroSublista[];

  checkoutFormGroup: FormGroup;

  selectedValue1: boolean = false;
  selectedValue2: boolean = false;

  constructor(private ejercicioService: EjercicioService, private parametroService: ParametroService, private parametroGrupoService: ParametroGrupoService, private parametroListaService: ParametroListaService, private parametroSublistaService: ParametroSublistaService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    
    //initialize exercicise list / table
    this.listEjercicios();

    //initialize parametros list
    this.listParametros1();
    this.listParametros2();
    this.listParametros3();

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


  listEjerciciosAdvanced(nombre: string, descripcion: string, entrenador: string, parametrovalor1: string, parametrosubvalor1: string, parametrovalor2: string, parametrosubvalor2: string, parametrovalor3: string, parametrosubvalor3: string ) {
    this.ejercicioService.getEjercicioAdvancedList(nombre, descripcion, entrenador, parametrovalor1, parametrosubvalor1, parametrovalor2, parametrosubvalor2, parametrovalor3, parametrosubvalor3).subscribe(
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


  listParametros2() {
    this.parametroService.getParametroList().subscribe(
      data => {
        this.parametros2 = data;
      }
    )
  }
  listParametroGrupos2(value: number) {
    this.parametroGrupoService.getParametroGrupoByFatherList(value).subscribe(
      data => {
        this.parametroGrupos2 = data;
      }
    )
  }
  listParametroListas2(value: number) {
    this.parametroListaService.getParametroListaByFatherList(value).subscribe(
      data => {
        this.parametroValores2 = data;
      }
    )
  }
  listParametroSublistas2(value: number) {
    this.parametroSublistaService.getParametroSublistaByFatherList(value).subscribe(
      data => {
        this.parametroSubvalores2 = data;
      }
    )
  }



  listParametros3() {
    this.parametroService.getParametroList().subscribe(
      data => {
        this.parametros3 = data;
      }
    )
  }
  listParametroGrupos3(value: number) {
    this.parametroGrupoService.getParametroGrupoByFatherList(value).subscribe(
      data => {
        this.parametroGrupos3 = data;
      }
    )
  }
  listParametroListas3(value: number) {
    this.parametroListaService.getParametroListaByFatherList(value).subscribe(
      data => {
        this.parametroValores3 = data;
      }
    )
  }
  listParametroSublistas3(value: number) {
    this.parametroSublistaService.getParametroSublistaByFatherList(value).subscribe(
      data => {
        this.parametroSubvalores3 = data;
      }
    )
  }





  onSubmit(){
    console.log("Manejando el botón de submit");
    console.log("Nombre: "+ this.checkoutFormGroup.get('general.nombre')?.value);
    console.log("Descripcion: "+this.checkoutFormGroup.get('general.descripcion')?.value);
    console.log("Entrenador: "+this.checkoutFormGroup.get('general.entrenadorNick')?.value);
    console.log("Parametro 1: "+this.checkoutFormGroup.get('parametro1.parametro1')?.value);
    console.log("Parametro Grupo 1: "+this.checkoutFormGroup.get('parametro1.parametrogrupo1')?.value.id);
    console.log("Parametro Valor 1: "+this.checkoutFormGroup.get('parametro1.parametrovalor1')?.value.id);
    console.log("Parametro Subvalor 1: "+this.checkoutFormGroup.get('parametro1.parametrosubvalor1')?.value.id);

    var nombre : string = this.checkoutFormGroup.get('general.nombre')?.value;
    var descripcion : string = this.checkoutFormGroup.get('general.descripcion')?.value;
    var entrenador : string = this.checkoutFormGroup.get('general.entrenadorNick')?.value;

    var parametrovalor1 : string = this.checkoutFormGroup.get('parametro1.parametrovalor1')?.value.id;
    var parametrosubvalor1 : string = this.checkoutFormGroup.get('parametro1.parametrosubvalor1')?.value.id;
    
    var parametrovalor2 : string = this.checkoutFormGroup.get('parametro2.parametrovalor2')?.value.id;
    var parametrosubvalor2 : string = this.checkoutFormGroup.get('parametro2.parametrosubvalor2')?.value.id; 

    var parametrovalor3 : string = this.checkoutFormGroup.get('parametro3.parametrovalor3')?.value.id;
    var parametrosubvalor3 : string = this.checkoutFormGroup.get('parametro3.parametrosubvalor3')?.value.id; 

    console.log("ONSUBMIT part 1 -> nombre: "+nombre+" descr: "+descripcion+" entr: "+entrenador+ " pv1: "+parametrovalor1+ " ps1: "+parametrosubvalor1+ " pv2: "+parametrovalor2+ " ps2: "+parametrosubvalor2+ " pv3: "+parametrovalor3+ " ps3 "+parametrosubvalor3);

    //don't pass undefined, pass "" instead
    if(parametrovalor1 === undefined){
      parametrovalor1 = "";
    }
    if(parametrosubvalor1 === undefined){
      parametrosubvalor1 = "";
    }
    if(parametrovalor2 === undefined){
      parametrovalor2 = "";
    }
    if(parametrosubvalor2 === undefined){
      parametrosubvalor2 = "";
    }
    if(parametrovalor3 === undefined){
      parametrovalor3 = "";
    }
    if(parametrosubvalor3 === undefined){
      parametrosubvalor3 = "";
    }

    console.log("ONSUBMIT part 2 -> nombre: "+nombre+" descr: "+descripcion+" entr: "+entrenador+ " pv1: "+parametrovalor1+ " ps1: "+parametrosubvalor1+ " pv2: "+parametrovalor2+ " ps2: "+parametrosubvalor2+ " pv3: "+parametrovalor3+ " ps3 "+parametrosubvalor3);

    this.listEjerciciosAdvanced(nombre, descripcion, entrenador, parametrovalor1, parametrosubvalor1, parametrovalor2, parametrosubvalor2, parametrovalor3, parametrosubvalor3);



  }





  onChangeP1(){
    var value : string = ""+this.checkoutFormGroup.get('parametro1.parametro1')?.value;
    if(value!==""){
      //update parameter group list 1
      console.log("onChangeP1 - value = "+value);
      this.listParametroGrupos1(Number(value));
      this.parametroValores1 = [];
      this.parametroSubvalores1 = [];
    }else{
      //leave the parameter group list 1 blank
      this.parametroGrupos1 = [];
      this.parametroValores1 = [];
      this.parametroSubvalores1 = [];
    }
    this.selectedValue1 = false;
    this.selectedValue2 = false;
    this.parametroValores2 = [];
    this.parametroSubvalores2 = [];
    this.parametroValores3 = [];
    this.parametroSubvalores3 = [];
    this.parametroGrupos2 = [];
    this.parametroGrupos3 = [];

  }
  onChangePG1(){
    var value : string = ""+this.checkoutFormGroup.get('parametro1.parametrogrupo1')?.value.id;
    if(value!=="" && value !== "undefined"){
      //update parameter value list 1
      console.log("onChangePG1 - value = "+value);
      this.listParametroListas1(Number(value));
      this.parametroSubvalores1 = [];
    }else{
      //leave the parameter value list 1 blank
      this.parametroValores1 = [];
      this.parametroSubvalores1 = [];
    }
    this.selectedValue1 = false;
    this.selectedValue2 = false;
    this.parametroValores2 = [];
    this.parametroSubvalores2 = [];
    this.parametroValores3 = [];
    this.parametroSubvalores3 = [];
    this.parametroGrupos2 = [];
    this.parametroGrupos3 = [];
  }
  onChangePV1(){
    var value : string = ""+this.checkoutFormGroup.get('parametro1.parametrovalor1')?.value.id;
    if(value!=="" && value !== "undefined"){
      //update parameter value list 1
      console.log("onChangePV1 - value = "+value);
      this.listParametroSublistas1(Number(value));
      this.selectedValue1 = true;
    }else{
      //leave the parameter subvalue list 1 blank
      this.parametroSubvalores1 = [];
      this.selectedValue1 = false;
      this.selectedValue2 = false;
      this.parametroValores2 = [];
      this.parametroSubvalores2 = [];
      this.parametroValores3 = [];
      this.parametroSubvalores3 = [];
      this.parametroGrupos2 = [];
      this.parametroGrupos3 = [];
    }
  }




  onChangeP2(){
    var value : string = ""+this.checkoutFormGroup.get('parametro2.parametro2')?.value;
    if(value!==""){
      //update parameter group list 2
      console.log("onChangeP2 - value = "+value);
      this.listParametroGrupos2(Number(value));
      this.parametroValores2 = [];
      this.parametroSubvalores2 = [];
    }else{
      //leave the parameter group list 2 blank
      this.parametroGrupos2 = [];
      this.parametroValores2 = [];
      this.parametroSubvalores2 = [];
    }
    this.selectedValue2 = false;
    this.parametroValores3 = [];
    this.parametroSubvalores3 = [];
    this.parametroGrupos3 = [];
  }
  onChangePG2(){
    var value : string = ""+this.checkoutFormGroup.get('parametro2.parametrogrupo2')?.value.id;
    if(value!=="" && value !== "undefined"){
      //update parameter value list 2
      console.log("onChangePG2 - value = "+value);
      this.listParametroListas2(Number(value));
      this.parametroSubvalores2 = [];
    }else{
      //leave the parameter value list 2 blank
      this.parametroValores2 = [];
      this.parametroSubvalores2 = [];
    }
    this.selectedValue2 = false;
    this.parametroValores3 = [];
    this.parametroSubvalores3 = [];
    this.parametroGrupos3 = [];
  }
  onChangePV2(){
    var value : string = ""+this.checkoutFormGroup.get('parametro2.parametrovalor2')?.value.id;
    if(value!=="" && value !== "undefined"){
      //update parameter value list 2
      console.log("onChangePV2 - value = "+value);
      this.listParametroSublistas2(Number(value));
      this.selectedValue2 = true;
    }else{
      //leave the parameter subvalue list 2 blank
      this.parametroSubvalores2 = [];
      this.selectedValue2 = false;
      this.parametroValores3 = [];
      this.parametroSubvalores3 = [];
      this.parametroGrupos3 = [];
    }
  }




  onChangeP3(){
    var value : string = ""+this.checkoutFormGroup.get('parametro3.parametro3')?.value;
    if(value!==""){
      //update parameter group list 3
      console.log("onChangeP3 - value = "+value);
      this.listParametroGrupos3(Number(value));
      this.parametroValores3 = [];
      this.parametroSubvalores3 = [];
    }else{
      //leave the parameter group list 3 blank
      this.parametroGrupos3 = [];
      this.parametroValores3 = [];
      this.parametroSubvalores3 = [];
    }
  }
  onChangePG3(){
    var value : string = ""+this.checkoutFormGroup.get('parametro3.parametrogrupo3')?.value.id;
    if(value!=="" && value !== "undefined"){
      //update parameter value list 3
      console.log("onChangePG3 - value = "+value);
      this.listParametroListas3(Number(value));
      this.parametroSubvalores3 = [];
    }else{
      //leave the parameter value list 3 blank
      this.parametroValores3 = [];
      this.parametroSubvalores3 = [];
    }
  }
  onChangePV3(){
    var value : string = ""+this.checkoutFormGroup.get('parametro3.parametrovalor3')?.value.id;
    if(value!=="" && value !== "undefined"){
      //update parameter value list 3
      console.log("onChangePV3 - value = "+value);
      this.listParametroSublistas3(Number(value));
    }else{
      //leave the parameter subvalue list 3 blank
      this.parametroSubvalores3 = [];
    }
  }









}

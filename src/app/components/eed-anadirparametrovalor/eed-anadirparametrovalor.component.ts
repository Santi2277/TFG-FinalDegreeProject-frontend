import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Ejercicio } from 'src/app/common/ejercicio';
import { Parametro } from 'src/app/common/parametro';
import { ParametroGrupo } from 'src/app/common/parametrogrupo';
import { ParametroLista } from 'src/app/common/parametrolista';
import { ParametroSublista } from 'src/app/common/parametrosublista';
import { EjercicioService } from 'src/app/services/ejercicio.service';
import { ParametroService } from 'src/app/services/parametro.service';
import { ParametroGrupoService } from 'src/app/services/parametrogrupo.service';
import { ParametroListaService } from 'src/app/services/parametrolista.service';

@Component({
  selector: 'app-eed-anadirparametrovalor',
  templateUrl: './eed-anadirparametrovalor.component.html',
  styleUrls: ['./eed-anadirparametrovalor.component.css']
})
export class EedAnadirparametrovalorComponent implements OnInit {

  ejercicio: Ejercicio = new Ejercicio();

  parametros1: Parametro[];
  parametroGrupos1: ParametroGrupo[];
  parametroValores1: ParametroLista[];

  checkoutFormGroup: FormGroup;

  constructor(private ejercicioService: EjercicioService, private parametroService: ParametroService, private parametroGrupoService: ParametroGrupoService, private parametroListaService: ParametroListaService, private route: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    //initialize parametros list
    this.listParametros1();

    this.route.paramMap.subscribe(() => {
      this.handleEjercicioDetails();
    })

    this.checkoutFormGroup = this.formBuilder.group({
        parametro1: this.formBuilder.group({
        parametro1: [''],
        parametrogrupo1: [''],
        parametrovalor1: ['']
      })
    })


  }






  handleEjercicioDetails() {

    // get the "id" param string. convert string to a number using the "+" 
    const ejercicioId: string = ""+this.route.snapshot.paramMap.get('id');
    const ejercicioIdNumber: number = +ejercicioId;

    this.ejercicioService.getEjercicio(ejercicioIdNumber).subscribe(
      data => {
        this.ejercicio = data;
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




  onChangeP1(){
    var value : string = ""+this.checkoutFormGroup.get('parametro1.parametro1')?.value;
    if(value!==""){
      //update parameter group list 1
      console.log("onChangeP1 - value = "+value);
      this.listParametroGrupos1(Number(value));
      
    }else{
      //leave the parameter group list 1 blank
      this.parametroGrupos1 = [];
      this.checkoutFormGroup.get('parametro1.parametrogrupo1')?.setValue('');
      
    }
    this.parametroValores1 = [];
    this.checkoutFormGroup.get('parametro1.parametrovalor1')?.setValue('');
    
    

  }
  onChangePG1(){
    var value : string = ""+this.checkoutFormGroup.get('parametro1.parametrogrupo1')?.value.id;
    if(value!=="" && value !== "undefined"){
      //update parameter value list 1
      console.log("onChangePG1 - value = "+value);
      this.listParametroListas1(Number(value));
      
    }else{
      //leave the parameter value list 1 blank
      this.parametroValores1 = [];
      this.checkoutFormGroup.get('parametro1.parametrovalor1')?.setValue('');
      
    }
    
  }
  






  onSubmit(){
    console.log("Manejando el botón de submit");
    console.log("Parametro 1: "+this.checkoutFormGroup.get('parametro1.parametro1')?.value);
    console.log("Parametro Grupo 1: "+this.checkoutFormGroup.get('parametro1.parametrogrupo1')?.value.id);
    console.log("Parametro Valor 1: "+this.checkoutFormGroup.get('parametro1.parametrovalor1')?.value.id);
    

    var parametrovalor1 : string = this.checkoutFormGroup.get('parametro1.parametrovalor1')?.value.id;
    

    console.log("ONSUBMIT "+parametrovalor1);

    //don't pass undefined, pass "" instead
    if(parametrovalor1 === undefined){
      parametrovalor1 = "";
    }
    

    console.log("ONSUBMIT "+parametrovalor1);

    this.ejercicioService.postParametroListaToEjercicio(this.ejercicio.id, parametrovalor1).subscribe({
      next: response => {
        alert(`Valor de parámetro añadido con éxito.`);
        //redirect
      this.router.navigateByUrl('/entrenador/ejercicio/detalle/'+this.ejercicio.id);

      },
      error: err => {
        alert(`Hubo un error: ${err.message}`);
      }
    }
  );



  }
  


}

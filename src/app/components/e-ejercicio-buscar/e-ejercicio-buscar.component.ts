import { Component, OnInit } from '@angular/core';
import { EjercicioService } from 'src/app/services/ejercicio.service';
import { Ejercicio } from 'src/app/common/ejercicio';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-e-ejercicio-buscar',
  templateUrl: './e-ejercicio-buscar.component.html',
  styleUrls: ['./e-ejercicio-buscar.component.css']
})
export class EEjercicioBuscarComponent implements OnInit {

  ejercicios: Ejercicio[];

  checkoutFormGroup: FormGroup;

  constructor(private ejercicioService: EjercicioService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    //initialize exercicise list / table
    this.listEjercicios();

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

  onSubmit(){
    console.log("Manejando el botón de submit");
    console.log(this.checkoutFormGroup.get('general')?.value);
    console.log(this.checkoutFormGroup.get('parametro1')?.value);
    console.log(this.checkoutFormGroup.get('parametro2')?.value);
  }

}

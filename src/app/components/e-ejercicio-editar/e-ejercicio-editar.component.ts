import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EjercicioEdit } from 'src/app/common/edit/ejercicioedit';
import { Ejercicio } from 'src/app/common/ejercicio';
import { EjercicioService } from 'src/app/services/ejercicio.service';

@Component({
  selector: 'app-e-ejercicio-editar',
  templateUrl: './e-ejercicio-editar.component.html',
  styleUrls: ['./e-ejercicio-editar.component.css']
})
export class EEjercicioEditarComponent implements OnInit {

  ejercicio: Ejercicio = new Ejercicio();

  checkoutFormGroup: FormGroup;
  

  constructor(private ejercicioService: EjercicioService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }





  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.handleEjercicioDetails();
    })


    // build the form
    this.checkoutFormGroup = this.formBuilder.group({
      general: this.formBuilder.group({
        nombre: [''],
        descripcioncorta: [''],
        descripcionlarga: ['']
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



  onSubmit(){

    //logs
    console.log("Manejando el botón de submit");
    console.log("Nombre: "+ this.checkoutFormGroup.get('general.nombre')?.value);
    console.log("Descripcion corta: "+ this.checkoutFormGroup.get('general.descripcioncorta')?.value);
    console.log("Descripcion larga: "+ this.checkoutFormGroup.get('general.descripcionlarga')?.value);


    //get form values
    var nombre : string = this.checkoutFormGroup.get('general.nombre')?.value;
    var descripcioncorta : string = this.checkoutFormGroup.get('general.descripcioncorta')?.value;
    var descripcionlarga : string = this.checkoutFormGroup.get('general.descripcionlarga')?.value;
    

    var ejercicio: EjercicioEdit = new EjercicioEdit();
    ejercicio.nombre = nombre;
    ejercicio.descripcionCorta = descripcioncorta;
    ejercicio.descripcionLarga = descripcionlarga;
    ejercicio.fechaCreacion = this.ejercicio.fechaCreacion;

    //update exercise
    console.log("antes de actualizar");
    
    this.ejercicioService.updateEjercicio(this.ejercicio.id, ejercicio).subscribe({
      next: response => {
        alert(`Ejercicio editado con éxito.\nNombre actual: ${response.nombre}`);
        //redirect
        this.router.navigateByUrl('/entrenador/ejercicio/detalle/'+response.id);

      },
      error: err => {
        alert(`Hubo un error: ${err.message}`);
      }
    }
  );;


    

  }

  

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ParametroEdit } from 'src/app/common/edit/parametroedit';
import { Parametro } from 'src/app/common/parametro';
import { ParametroService } from 'src/app/services/parametro.service';

@Component({
  selector: 'app-ep-parametro-editar',
  templateUrl: './ep-parametro-editar.component.html',
  styleUrls: ['./ep-parametro-editar.component.css']
})
export class EpParametroEditarComponent implements OnInit {

  parametro: Parametro = new Parametro();

  checkoutFormGroup: FormGroup;

  constructor(private parametroService: ParametroService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }


  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.handleParametroDetails();
    })


    // build the form
    this.checkoutFormGroup = this.formBuilder.group({
      general: this.formBuilder.group({
        nombre: [''],
        diminutivo: [''],
        info: ['']
      })
    })

  }


  handleParametroDetails() {

    // get the "id" param string. convert string to a number using the "+" 
    const parametroId: string = ""+this.route.snapshot.paramMap.get('id');
    const parametroIdNumber: number = +parametroId;

    this.parametroService.getParametro(parametroIdNumber).subscribe(
      data => {
        this.parametro = data;
      }
    )
  }







  onSubmit(){

    //logs
    console.log("Manejando el botón de submit");
    console.log("Nombre: "+ this.checkoutFormGroup.get('general.nombre')?.value);
    console.log("Diminutivo: "+ this.checkoutFormGroup.get('general.diminutivo')?.value);
    console.log("Info: "+ this.checkoutFormGroup.get('general.info')?.value);


    //get form values
    var nombre : string = this.checkoutFormGroup.get('general.nombre')?.value;
    var diminutivo : string = this.checkoutFormGroup.get('general.diminutivo')?.value;
    var info : string = this.checkoutFormGroup.get('general.info')?.value;
    

    var parametro: ParametroEdit = new ParametroEdit();
    parametro.nombre = nombre;
    parametro.diminutivo = diminutivo;
    parametro.info = info;
    parametro.fechaCreacion = this.parametro.fechaCreacion;

    //update exercise
    console.log("antes de actualizar");
    
    this.parametroService.updateParametro(this.parametro.id, parametro).subscribe({
      next: response => {
        alert(`Parámetro editado con éxito.\nNombre actual: ${response.nombre}`);
        //redirect
        this.router.navigateByUrl('/entrenador/parametro/parametro/detalle/'+response.id);

      },
      error: err => {
        alert(`Hubo un error: ${err.message}`);
      }
    }
  );;


    

  }





}

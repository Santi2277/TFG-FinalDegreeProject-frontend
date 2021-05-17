import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ParametroSublistaEdit } from 'src/app/common/edit/parametrosublistaedit';
import { ParametroSublista } from 'src/app/common/parametrosublista';
import { ParametroSublistaService } from 'src/app/services/parametrosublista.service';

@Component({
  selector: 'app-ep-parametrosubvalor-editar',
  templateUrl: './ep-parametrosubvalor-editar.component.html',
  styleUrls: ['./ep-parametrosubvalor-editar.component.css']
})
export class EpParametrosubvalorEditarComponent implements OnInit {

  parametrosubvalor: ParametroSublista = new ParametroSublista();

  checkoutFormGroup: FormGroup;

  constructor(private parametroSublistaService: ParametroSublistaService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }




  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.handleParametroSubvalorDetails();
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


  handleParametroSubvalorDetails() {

    // get the "id" param string. convert string to a number using the "+" 
    const parametroSubvalorId: string = ""+this.route.snapshot.paramMap.get('id');
    const parametroSubvalorIdNumber: number = +parametroSubvalorId;

    this.parametroSublistaService.getParametroSublista(parametroSubvalorIdNumber).subscribe(
      data => {
        this.parametrosubvalor = data;
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
    

    var parametrosubvalor: ParametroSublistaEdit = new ParametroSublistaEdit();
    parametrosubvalor.nombre = nombre;
    parametrosubvalor.diminutivo = diminutivo;
    parametrosubvalor.info = info;
    parametrosubvalor.fechaCreacion = this.parametrosubvalor.fechaCreacion;

    //update exercise
    console.log("antes de actualizar");
    
    this.parametroSublistaService.updateParametroSublista(this.parametrosubvalor.id, parametrosubvalor).subscribe({
      next: response => {
        alert(`Parámetro subvalor editado con éxito.\nNombre actual: ${response.nombre}`);
        //redirect
        this.router.navigateByUrl('/entrenador/parametro/parametrosubvalor/detalle/'+response.id);

      },
      error: err => {
        alert(`Hubo un error: ${err.message}`);
      }
    }
  );;


    

  }







}

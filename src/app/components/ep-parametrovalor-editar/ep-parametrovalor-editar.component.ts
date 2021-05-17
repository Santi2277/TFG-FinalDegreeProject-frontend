import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ParametroListaEdit } from 'src/app/common/edit/parametrolistaedit';
import { ParametroLista } from 'src/app/common/parametrolista';
import { ParametroListaService } from 'src/app/services/parametrolista.service';

@Component({
  selector: 'app-ep-parametrovalor-editar',
  templateUrl: './ep-parametrovalor-editar.component.html',
  styleUrls: ['./ep-parametrovalor-editar.component.css']
})
export class EpParametrovalorEditarComponent implements OnInit {

  parametrovalor: ParametroLista = new ParametroLista();

  checkoutFormGroup: FormGroup;

  constructor(private parametroListaService: ParametroListaService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }



  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.handleParametroValorDetails();
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




  handleParametroValorDetails() {

    // get the "id" param string. convert string to a number using the "+" 
    const parametroValorId: string = ""+this.route.snapshot.paramMap.get('id');
    const parametroValorIdNumber: number = +parametroValorId;

    this.parametroListaService.getParametroLista(parametroValorIdNumber).subscribe(
      data => {
        this.parametrovalor = data;
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
    

    var parametrovalor: ParametroListaEdit = new ParametroListaEdit();
    //check undefined
    if(nombre == ""){
      parametrovalor.nombre = ""+this.parametrovalor.nombre;
    }else{
      parametrovalor.nombre = nombre;
    }
    if(diminutivo == ""){
      parametrovalor.diminutivo = ""+this.parametrovalor.diminutivo;
    }else{
      parametrovalor.diminutivo = diminutivo;
    }
    if(info == ""){
      parametrovalor.info = ""+this.parametrovalor.info;
    }else{
      parametrovalor.info = info;
    }
    parametrovalor.fechaCreacion = this.parametrovalor.fechaCreacion;

    //update exercise
    console.log("antes de actualizar");
    
    this.parametroListaService.updateParametroLista(this.parametrovalor.id, parametrovalor).subscribe({
      next: response => {
        alert(`Parámetro valor editado con éxito.\nNombre actual: ${response.nombre}`);
        //redirect
        this.router.navigateByUrl('/entrenador/parametro/parametrovalor/detalle/'+response.id);

      },
      error: err => {
        alert(`Hubo un error: ${err.message}`);
      }
    }
  );;


    

  }







}

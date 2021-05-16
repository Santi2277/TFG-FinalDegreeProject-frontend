import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ParametroGrupoEdit } from 'src/app/common/edit/parametrogrupoedit';
import { ParametroGrupo } from 'src/app/common/parametrogrupo';
import { ParametroGrupoService } from 'src/app/services/parametrogrupo.service';

@Component({
  selector: 'app-ep-parametrogrupo-editar',
  templateUrl: './ep-parametrogrupo-editar.component.html',
  styleUrls: ['./ep-parametrogrupo-editar.component.css']
})
export class EpParametrogrupoEditarComponent implements OnInit {

  parametrogrupo: ParametroGrupo;

  checkoutFormGroup: FormGroup;

  constructor(private parametroGrupoService: ParametroGrupoService, private route: ActivatedRoute, private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(() => {
      this.handleParametroGrupoDetails();
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




  handleParametroGrupoDetails() {

    // get the "id" param string. convert string to a number using the "+" 
    const parametroGrupoId: string = ""+this.route.snapshot.paramMap.get('id');
    const parametroGrupoIdNumber: number = +parametroGrupoId;

    this.parametroGrupoService.getParametroGrupo(parametroGrupoIdNumber).subscribe(
      data => {
        this.parametrogrupo = data;
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
    

    var parametrogrupo: ParametroGrupoEdit = new ParametroGrupoEdit();
    parametrogrupo.nombre = nombre;
    parametrogrupo.diminutivo = diminutivo;
    parametrogrupo.info = info;
    parametrogrupo.fechaCreacion = this.parametrogrupo.fechaCreacion;

    //update exercise
    console.log("antes de actualizar");
    
    this.parametroGrupoService.updateParametroGrupo(this.parametrogrupo.id, parametrogrupo).subscribe({
      next: response => {
        alert(`Parámetro grupo editado con éxito.\nNombre actual: ${response.nombre}`);
        //redirect
        this.router.navigateByUrl('/entrenador/parametro/parametrogrupo/detalle/'+response.id);

      },
      error: err => {
        alert(`Hubo un error: ${err.message}`);
      }
    }
  );;


    

  }










}

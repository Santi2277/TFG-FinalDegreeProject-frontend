import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Perfil } from 'src/app/common/perfil';
import { ParametroTransfer } from 'src/app/common/transfer/parametrotransfer';
import { ParametroService } from 'src/app/services/parametro.service';
import { PerfilService } from 'src/app/services/perfil.service';

@Component({
  selector: 'app-ep-parametro-crear',
  templateUrl: './ep-parametro-crear.component.html',
  styleUrls: ['./ep-parametro-crear.component.css']
})
export class EpParametroCrearComponent implements OnInit {

  perfiles: Perfil[];
  baseUrl: string = "http://localhost:8080/api/";

  checkoutFormGroup: FormGroup;

  constructor(private parametroService: ParametroService,
    private router: Router,
    private perfilService: PerfilService,
    private formBuilder: FormBuilder) { }


  ngOnInit(): void {

    //initialize perfiles list
    this.listPerfiles();

    

    // build the form
    this.checkoutFormGroup = this.formBuilder.group({
      general: this.formBuilder.group({
        nombre: [''],
        diminutivo: [''],
        info: [''],
        creador: ['']
        
      })
      
      
      
    })


  }





  listPerfiles() {
    this.perfilService.getPerfilList().subscribe(
      data => {
        this.perfiles = data;
      }
    )
  }




  onSubmit(){

    //logs
    console.log("Manejando el botón de submit");
    console.log("Nombre: "+ this.checkoutFormGroup.get('general.nombre')?.value);
    console.log("Diminutivo: "+ this.checkoutFormGroup.get('general.diminutivo')?.value);
    console.log("Info: "+ this.checkoutFormGroup.get('general.info')?.value);
    console.log("Creador: "+ this.checkoutFormGroup.get('general.creador')?.value);

    //get form values
    var nombre : string = this.checkoutFormGroup.get('general.nombre')?.value;
    var diminutivo : string = this.checkoutFormGroup.get('general.diminutivo')?.value;
    var info : string = this.checkoutFormGroup.get('general.info')?.value;
    var creador : number = this.checkoutFormGroup.get('general.creador')?.value;

    //test hardcoded creation, should be on a method appart
    //and called on click a button or onsubmit form with
    //not hardcoded fields
    var parametro: ParametroTransfer = new ParametroTransfer();
    parametro.nombre = nombre;
    parametro.diminutivo = diminutivo;
    parametro.info = info;
    parametro.creador = this.baseUrl+"perfiles/"+creador;



    this.parametroService.postParametro(parametro).subscribe({
      next: response => {
        alert(`Parametro creado con éxito.\nNombre: ${response.nombre}`);
        //redirect
      this.router.navigateByUrl('/entrenador/parametro/parametro/detalle/'+response.id);

      },
      error: err => {
        alert(`Hubo un error: ${err.message}`);
      }
    }
  );

  }







}

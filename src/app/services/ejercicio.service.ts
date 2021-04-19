import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ejercicio } from '../common/ejercicio';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  private baseUrl = 'http://localhost:8080/api/ejercicios';

  constructor(private httpClient: HttpClient) { }

  getEjercicioList(thePage: number, thePageSize: number): Observable<GetResponse> {
    return this.httpClient.get<GetResponse>(this.baseUrl+"?page="+thePage+"&size="+thePageSize);
  }

  getEjercicioAdvancedList(nombre: string, descripcion: string, entrenador: string,
     parametrovalor1: string, parametrosubvalor1: string, parametrovalor2: string,
      parametrosubvalor2: string,  parametrovalor3: string, parametrosubvalor3: string, 
      thePage: number, thePageSize: number): Observable<GetResponse> {
    return this.httpClient.get<GetResponse>(this.baseUrl+"/search/buscarEjercicio?nombre="+nombre+"&descripcion="+descripcion+
      "&entrenador="+entrenador+"&parametrovalor1="+parametrovalor1+"&parametrosubvalor1="+parametrosubvalor1+
      "&parametrovalor2="+parametrovalor2+"&parametrosubvalor2="+parametrosubvalor2+
      "&parametrovalor3="+parametrovalor3+"&parametrosubvalor3="+parametrosubvalor3+
      "&page="+thePage+"&size="+thePageSize);
  }






}

interface GetResponse {
  _embedded: {
    ejercicios: Ejercicio[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
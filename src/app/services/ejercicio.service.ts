import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ejercicio } from '../common/ejercicio';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EjercicioTransfer } from '../common/ejerciciotransfer';
import { EjercicioEdit } from '../common/edit/ejercicioedit';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  private baseUrl = 'http://localhost:8080/api/ejercicios';
  private basicUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) { }

  getEjercicio(ejercicioId: number): Observable<Ejercicio> {
    // need to build URL based on exercise id
    const ejercicioUrl = `${this.baseUrl}/${ejercicioId}`;
    return this.httpClient.get<Ejercicio>(ejercicioUrl+"?projection=inlineEjercicioPerfil");
  }

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

  postEjercicio(ejercicio: EjercicioTransfer): Observable<any> {
    return this.httpClient.post<EjercicioTransfer>(this.baseUrl, ejercicio);    
  }

  deleteEjercicio(ejercicioId: number): Observable<any>{
    let endPoint = `${this.baseUrl}/${ejercicioId}`;
    return this.httpClient.delete(endPoint);
  }

  updateEjercicio(ejercicioId: number, ejercicio: EjercicioEdit): Observable<any> {
    let endPoint = `${this.baseUrl}/${ejercicioId}`;
    return this.httpClient.put<EjercicioEdit>(endPoint, ejercicio);
  }

  deleteParametroListaFromEjercicio(ejercicioId: number, parametroListaId: number): Observable<any>{
    let endPoint = `${this.baseUrl}/${ejercicioId}/parametroListas/${parametroListaId}`;
    return this.httpClient.delete(endPoint);
  }
  deleteParametroSublistaFromEjercicio(ejercicioId: number, parametroSublistaId: number): Observable<any>{
    let endPoint = `${this.baseUrl}/${ejercicioId}/parametroSublistas/${parametroSublistaId}`;
    return this.httpClient.delete(endPoint);
  }

  postParametroListaToEjercicio(ejercicioId: number, parametroListaId: string): Observable<any> {
    let endPoint = `${this.baseUrl}/${ejercicioId}/parametroListas`;
    let headers = { 'content-type': 'text/uri-list'};
    const body=`${this.basicUrl}/parametrolistas/${parametroListaId}`;
    return this.httpClient.post(endPoint, body, {'headers': headers});    
  }

  postParametroSublistaToEjercicio(ejercicioId: number, parametroSublistaId: string): Observable<any> {
    let endPoint = `${this.baseUrl}/${ejercicioId}/parametroSublistas`;
    let headers = { 'content-type': 'text/uri-list'};
    const body=`${this.basicUrl}/parametrosublistas/${parametroSublistaId}`;
    return this.httpClient.post(endPoint, body, {'headers': headers});    
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
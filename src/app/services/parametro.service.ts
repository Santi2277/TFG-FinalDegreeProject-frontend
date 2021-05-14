import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Parametro } from '../common/parametro';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParametroService {

  private baseUrl = 'http://localhost:8080/api/parametros';

  constructor(private httpClient: HttpClient) { }





  getParametroList(): Observable<Parametro[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.parametroes)
    );
  }


  getParametroPagList(thePage: number, thePageSize: number): Observable<GetResponse> {
    return this.httpClient.get<GetResponse>(this.baseUrl+"?page="+thePage+"&size="+thePageSize);
  }


  getParametroAdvancedList(nombre: string, diminutivo: string, 
     thePage: number, thePageSize: number): Observable<GetResponse> {
   return this.httpClient.get<GetResponse>(this.baseUrl+"/search/buscarParametro?nombre="+nombre+"&diminutivo="+diminutivo+
     "&page="+thePage+"&size="+thePageSize);
 }





}




interface GetResponse {
  _embedded: {
    parametroes: Parametro[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
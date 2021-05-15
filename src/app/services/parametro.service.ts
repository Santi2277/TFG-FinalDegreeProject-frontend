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




 getParametro(parametroId: number): Observable<Parametro> {
  // need to build URL based on parametro id
  const parametroUrl = `${this.baseUrl}/${parametroId}`;
  return this.httpClient.get<Parametro>(parametroUrl);
}


deleteParametro(parametroId: number): Observable<any>{
  let endPoint = `${this.baseUrl}/${parametroId}`;
  return this.httpClient.delete(endPoint);
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
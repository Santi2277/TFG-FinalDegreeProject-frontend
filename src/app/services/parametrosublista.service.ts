import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParametroSublista } from '../common/parametrosublista';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ParametroSublistaTransfer } from '../common/transfer/parametrosublistatransfer';

@Injectable({
  providedIn: 'root'
})
export class ParametroSublistaService {

  private baseUrl = 'http://localhost:8080/api/parametrosublistas';

  constructor(private httpClient: HttpClient) { }

  getParametroSublistaList(): Observable<ParametroSublista[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.parametroSublistas)
    );
  }

  getParametroSublistaByFatherList(parametroValorId: number): Observable<ParametroSublista[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl+"/search/buscarParametroSublistaDeParametroLista?idParametroLista="+parametroValorId).pipe(
      map(response => response._embedded.parametroSublistas)
    );
  }


  getParametroSublistaPagList(thePage: number, thePageSize: number): Observable<GetResponse> {
    return this.httpClient.get<GetResponse>(this.baseUrl+"?page="+thePage+"&size="+thePageSize);
  }


  getParametroSublistaAdvancedList(nombre: string, diminutivo: string, parametro: string, parametrogrupo: string, parametrovalor: string,
     thePage: number, thePageSize: number): Observable<GetResponse> {
   return this.httpClient.get<GetResponse>(this.baseUrl+"/search/buscarParametroSublista?nombre="+nombre+"&diminutivo="+diminutivo+"&parametro="+parametro+"&parametrogrupo="+parametrogrupo+"&parametrovalor="+parametrovalor+
     "&page="+thePage+"&size="+thePageSize);
 }



 getParametroSublista(parametroSublistaId: number): Observable<ParametroSublista> {
  // need to build URL based on parametro Sublista id
  const parametroSublistaUrl = `${this.baseUrl}/${parametroSublistaId}`;
  return this.httpClient.get<ParametroSublista>(parametroSublistaUrl);
}


deleteParametroSublista(parametroSublistaId: number): Observable<any>{
  let endPoint = `${this.baseUrl}/${parametroSublistaId}`;
  return this.httpClient.delete(endPoint);
}

postParametroSublista(parametroSubvalor: ParametroSublistaTransfer): Observable<any> {
  return this.httpClient.post<ParametroSublistaTransfer>(this.baseUrl, parametroSubvalor);    
}

}

interface GetResponse {
  _embedded: {
    parametroSublistas: ParametroSublista[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
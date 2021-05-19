import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParametroLista } from '../common/parametrolista';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ParametroListaTransfer } from '../common/transfer/parametrolistatransfer';
import { ParametroListaEdit } from '../common/edit/parametrolistaedit';

@Injectable({
  providedIn: 'root'
})
export class ParametroListaService {

  private baseUrl = 'http://localhost:8080/api/parametrolistas';
  private basicUrl = 'http://localhost:8080/api';

  constructor(private httpClient: HttpClient) { }

  getParametroListaList(): Observable<ParametroLista[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.parametroListas)
    );
  }

  getParametroListaByFatherList(parametroGrupoId: number): Observable<ParametroLista[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl+"/search/buscarParametroListaDeParametroGrupo?idParametroGrupo="+parametroGrupoId).pipe(
      map(response => response._embedded.parametroListas)
    );
  }



  getParametroListaPagList(thePage: number, thePageSize: number): Observable<GetResponse> {
    return this.httpClient.get<GetResponse>(this.baseUrl+"?page="+thePage+"&size="+thePageSize);
  }


  getParametroListaAdvancedList(nombre: string, diminutivo: string, parametro: string, parametrogrupo: string,
     thePage: number, thePageSize: number): Observable<GetResponse> {
   return this.httpClient.get<GetResponse>(this.baseUrl+"/search/buscarParametroLista?nombre="+nombre+"&diminutivo="+diminutivo+"&parametro="+parametro+"&parametrogrupo="+parametrogrupo+
     "&page="+thePage+"&size="+thePageSize);
 }


 getParametroLista(parametroListaId: number): Observable<ParametroLista> {
  // need to build URL based on parametro Lista id
  const parametroListaUrl = `${this.baseUrl}/${parametroListaId}`;
  return this.httpClient.get<ParametroLista>(parametroListaUrl+"?projection=inlineParametroListaPerfil");
}


deleteParametroLista(parametroListaId: number): Observable<any>{
  let endPoint = `${this.baseUrl}/${parametroListaId}`;
  return this.httpClient.delete(endPoint);
}

postParametroLista(parametroValor: ParametroListaTransfer): Observable<any> {
  return this.httpClient.post<ParametroListaTransfer>(this.baseUrl, parametroValor);    
}



updateParametroLista(parametroValorId: number, parametroValor: ParametroListaEdit): Observable<any> {
  let endPoint = `${this.baseUrl}/${parametroValorId}`;
  return this.httpClient.put<ParametroListaEdit>(endPoint, parametroValor);
}

postParametroGrupoToParametroLista(parametroListaId: number, parametroGrupoId: number): Observable<any> {
  let endPoint = `${this.basicUrl}/parametrogrupos/${parametroGrupoId}/parametroListas`;
  let headers = { 'content-type': 'text/uri-list'};
  const body=`${this.basicUrl}/parametrolistas/${parametroListaId}`;
  return this.httpClient.post(endPoint, body, {'headers': headers});    
}



}

interface GetResponse {
  _embedded: {
    parametroListas: ParametroLista[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
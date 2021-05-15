import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParametroLista } from '../common/parametrolista';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ParametroListaTransfer } from '../common/transfer/parametrolistatransfer';

@Injectable({
  providedIn: 'root'
})
export class ParametroListaService {

  private baseUrl = 'http://localhost:8080/api/parametrolistas';

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
  return this.httpClient.get<ParametroLista>(parametroListaUrl);
}


deleteParametroLista(parametroListaId: number): Observable<any>{
  let endPoint = `${this.baseUrl}/${parametroListaId}`;
  return this.httpClient.delete(endPoint);
}

postParametroLista(parametroValor: ParametroListaTransfer): Observable<any> {
  return this.httpClient.post<ParametroListaTransfer>(this.baseUrl, parametroValor);    
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
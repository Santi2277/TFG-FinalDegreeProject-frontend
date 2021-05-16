import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParametroGrupo } from '../common/parametrogrupo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ParametroGrupoTransfer } from '../common/transfer/parametrogrupotransfer';
import { ParametroGrupoEdit } from '../common/edit/parametrogrupoedit';

@Injectable({
  providedIn: 'root'
})
export class ParametroGrupoService {

  private baseUrl = 'http://localhost:8080/api/parametrogrupos';

  constructor(private httpClient: HttpClient) { }

  getParametroGrupoList(): Observable<ParametroGrupo[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.parametroGrupoes)
    );
  }

  getParametroGrupoByFatherList(parametroId: number): Observable<ParametroGrupo[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl+"/search/buscarParametroGrupoDeParametro?idParametro="+parametroId).pipe(
      map(response => response._embedded.parametroGrupoes)
    );
  }


  getParametroGrupoPagList(thePage: number, thePageSize: number): Observable<GetResponse> {
    return this.httpClient.get<GetResponse>(this.baseUrl+"?page="+thePage+"&size="+thePageSize);
  }


  getParametroGrupoAdvancedList(nombre: string, diminutivo: string, parametro: string,
     thePage: number, thePageSize: number): Observable<GetResponse> {
   return this.httpClient.get<GetResponse>(this.baseUrl+"/search/buscarParametroGrupo?nombre="+nombre+"&diminutivo="+diminutivo+"&parametro="+parametro+
     "&page="+thePage+"&size="+thePageSize);
 }


 getParametroGrupo(parametroGrupoId: number): Observable<ParametroGrupo> {
  // need to build URL based on parametro Grupo id
  const parametroGrupoUrl = `${this.baseUrl}/${parametroGrupoId}`;
  return this.httpClient.get<ParametroGrupo>(parametroGrupoUrl);
}


deleteParametroGrupo(parametroGrupoId: number): Observable<any>{
  let endPoint = `${this.baseUrl}/${parametroGrupoId}`;
  return this.httpClient.delete(endPoint);
}

postParametroGrupo(parametroGrupo: ParametroGrupoTransfer): Observable<any> {
  return this.httpClient.post<ParametroGrupoTransfer>(this.baseUrl, parametroGrupo);    
}

updateParametroGrupo(parametroGrupoId: number, parametroGrupo: ParametroGrupoEdit): Observable<any> {
  let endPoint = `${this.baseUrl}/${parametroGrupoId}`;
  return this.httpClient.put<ParametroGrupoEdit>(endPoint, parametroGrupo);
}


}

interface GetResponse {
  _embedded: {
    parametroGrupoes: ParametroGrupo[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
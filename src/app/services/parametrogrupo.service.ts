import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParametroGrupo } from '../common/parametrogrupo';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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



}

interface GetResponse {
  _embedded: {
    parametroGrupoes: ParametroGrupo[];
  }
}
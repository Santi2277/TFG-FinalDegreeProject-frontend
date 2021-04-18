import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParametroSublista } from '../common/parametrosublista';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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


}

interface GetResponse {
  _embedded: {
    parametroSublistas: ParametroSublista[];
  }
}
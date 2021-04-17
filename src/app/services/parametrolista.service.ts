import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ParametroLista } from '../common/parametrolista';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ParametroListaService {

  private baseUrl = 'http://localhost:8080/api/parametrolistas';

  constructor(private httpClient: HttpClient) { }

  getParametroListaList(): Observable<ParametroLista[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.parametrolistas)
    );
  }
}

interface GetResponse {
  _embedded: {
    parametrolistas: ParametroLista[];
  }
}
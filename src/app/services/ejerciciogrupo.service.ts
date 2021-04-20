import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EjercicioGrupo } from '../common/ejerciciogrupo';

@Injectable({
  providedIn: 'root'
})
export class EjercicioGrupoService {

  private baseUrl = 'http://localhost:8080/api/ejerciciogrupos';

  constructor(private httpClient: HttpClient) { }

  getEjercicioGrupoList(): Observable<GetResponse> {
    return this.httpClient.get<GetResponse>(this.baseUrl);
  }
}

interface GetResponse {
  _embedded: {
    ejercicioGrupoes: EjercicioGrupo[];
  }
}
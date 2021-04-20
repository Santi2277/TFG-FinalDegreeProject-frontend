import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Perfil } from '../common/perfil';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private baseUrl = 'http://localhost:8080/api/perfiles';

  constructor(private httpClient: HttpClient) { }

  getPerfilList(): Observable<Perfil[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.perfils)
    );
  }
}

interface GetResponse {
  _embedded: {
    perfils: Perfil[];
  }
}
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ejercicio } from '../common/ejercicio';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EjercicioService {

  private baseUrl = 'http://localhost:8080/api/ejercicios';

  constructor(private httpClient: HttpClient) { }

  getEjercicioList(): Observable<Ejercicio[]> {
    return this.httpClient.get<GetResponse>(this.baseUrl).pipe(
      map(response => response._embedded.ejercicios)
    );
  }
}

interface GetResponse {
  _embedded: {
    ejercicios: Ejercicio[];
  }
}
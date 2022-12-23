import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pet } from '../model/pet';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  URL_Pet = 'http://localhost:8080/pets';
  constructor(private clienteHttp: HttpClient) { }

  inserir(novoPet: Pet): Observable<Pet> {
    return this.clienteHttp.post<Pet>(
      this.URL_Pet, novoPet);
  }

  listar(): Observable<Pet[]> {
    return this.clienteHttp.get<Pet[]>(this.URL_Pet);
  }

  deletar(idPet: string): Observable<object> {
    return this.clienteHttp.delete(`${this.URL_Pet}/${idPet}`);
  }

  pesquisarPorId(id: string): Observable<Pet> {
    return this.clienteHttp.get<Pet>(`${this.URL_Pet}/${id}`);
  }

  atualizar(Pet: Pet): Observable<Pet> {
    return this.clienteHttp
      .put<Pet>(`${this.URL_Pet}/${Pet.id}`, Pet);
  }
}

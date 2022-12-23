import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  URL_Usuario = 'http://localhost:8080/usuarios';
  constructor(private clienteHttp: HttpClient) { }

  inserir(novoUsuario: Usuario): Observable<Usuario> {
    return this.clienteHttp.post<Usuario>(
      this.URL_Usuario, novoUsuario);
  }

  listar(): Observable<Usuario[]> {
    return this.clienteHttp.get<Usuario[]>(this.URL_Usuario);
  }

  deletar(idUsuario: string): Observable<object> {
    return this.clienteHttp.delete(`${this.URL_Usuario}/${idUsuario}`);
  }

  pesquisarPorId(id: string): Observable<Usuario> {
    return this.clienteHttp.get<Usuario>(`${this.URL_Usuario}/${id}`);
  }

  atualizar(Usuario: Usuario): Observable<Usuario> {
    return this.clienteHttp
      .put<Usuario>(`${this.URL_Usuario}/${Usuario.id}`, Usuario);
  }
}

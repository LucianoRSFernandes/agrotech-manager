import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Fazenda } from '../models/fazenda.model';

@Injectable({ providedIn: 'root' })
export class FazendaService {
  private readonly API = 'https://jsonplaceholder.typicode.com/users';

  constructor(private http: HttpClient) { }

  // READ (Listar)
  getFazendas(): Observable<Fazenda[]> {
    return this.http.get<any[]>(this.API).pipe(
      map(usuarios => usuarios.map(u => ({
        id: u.id,
        nome: u.company.name,
        tamanhoHectares: Math.floor(Math.random() * 2000),
        cultura: 'Soja',
        status: 'Ativa'
      })))
    );
  }

  // CREATE (Criar)
  adicionarFazenda(fazenda: Fazenda): Observable<Fazenda> {
    return this.http.post<Fazenda>(this.API, fazenda);
  }

  // UPDATE (Atualizar) - Equivale ao @PutMapping no Spring
  atualizarFazenda(fazenda: Fazenda): Observable<Fazenda> {
    return this.http.put<Fazenda>(`${this.API}/${fazenda.id}`, fazenda);
  }

  // DELETE (Excluir) - Equivale ao @DeleteMapping no Spring
  excluirFazenda(id: number): Observable<any> {
    return this.http.delete(`${this.API}/${id}`);
  }
}
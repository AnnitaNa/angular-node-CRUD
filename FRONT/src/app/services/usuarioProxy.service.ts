import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IUsuario } from '../models/usuario.model';
import { IUsuarioInput } from '../models/usuarioInput.model';

const API_URL: string = `${environment.API_URL}`;
const baseUrl: string = `${API_URL}/usuario`;

@Injectable({
  providedIn: 'root',
})

export class UsuarioProxyService {
  constructor(private http: HttpClient) { }

  findAll(): Observable<IUsuario[]> {
    return this.http.get<IUsuario[]>(baseUrl);
  }

  findOne(id: string): Observable<IUsuario> {
    return this.http.get<IUsuario>(`${baseUrl}/${id}`);
  }

  create(data: IUsuarioInput): Observable<any> {
    return this.http.post(baseUrl, data);
  }

  update(id: string, data: IUsuarioInput): Observable<any> {
    return this.http.patch(`${baseUrl}/${id}`, data);
  }

  remove(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}/${id}`);
  }
}

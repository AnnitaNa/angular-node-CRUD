import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { IUsuario } from '../models/usuario.model';
import { IUsuarioInput } from '../models/usuarioInput.model';
import { UsuarioProxyService } from './usuarioProxy.service';


@Injectable({
  providedIn: 'root'
})

export class UsuarioService {

  constructor(private usuarioProxyService: UsuarioProxyService) { }

  findAll(): Observable<IUsuario[]> {
    return this.usuarioProxyService.findAll();
  }

  findOne(id: string): Observable<IUsuario> {
    return this.usuarioProxyService.findOne(id);
  }

  create(data: IUsuarioInput): Observable<any> {
    return this.usuarioProxyService.create(data);
  }

  update(id: string, data: IUsuarioInput): Observable<any> {
    return this.usuarioProxyService.update(id, data);
  }

  remove(id: string): Observable<any> {
    return this.usuarioProxyService.remove(id);
  }
  
}

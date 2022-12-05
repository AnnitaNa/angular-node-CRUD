import { UpdateResult, DeleteResult } from 'typeorm';

import { CreateUsuarioDto } from '../dto/create-usuario.dto';
import { UpdateUsuarioDto } from '../dto/update-usuario.dto';
import Usuario from '../entities/usuario.entity';

export interface IUserRepository {
  create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario>;
  findAll(): Promise<Usuario[]>;
  findOne(id: string): Promise<Usuario>;
  update(id: string, updateUsuarioDto: UpdateUsuarioDto): Promise<UpdateResult>;
  remove(id: string): Promise<DeleteResult>;
}

import { Injectable } from '@nestjs/common';
import { CreateUsuarioDto } from './dto/create-usuario.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import Usuario from './entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm/dist';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario) private usuarioRepository: Repository<Usuario>,
  ) {}

  async create(createUsuarioDto: CreateUsuarioDto): Promise<Usuario> {
    return await this.usuarioRepository.save(createUsuarioDto);
  }

  async findAll(): Promise<Usuario[]> {
    return await this.usuarioRepository.find();
  }

  async findOne(id: string): Promise<Usuario> {
    return await this.usuarioRepository.findOneBy({ id });
  }

  async update(
    id: string,
    updateUsuarioDto: UpdateUsuarioDto,
  ): Promise<UpdateResult> {
    return await this.usuarioRepository.update(id, updateUsuarioDto);
  }

  async remove(id: string): Promise<DeleteResult> {
    return await this.usuarioRepository.delete(id);
  }
}

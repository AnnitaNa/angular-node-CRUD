import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IUser } from '../interface/IUser';

@Entity()
class Usuario implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 120 })
  name: string;

  @Column({ length: 120 })
  cpf: string;

  @Column({ length: 120 })
  email: string;

  @Column({ length: 120 })
  phone: string;

  @Column({ length: 120 })
  gender: string;

  @Column({ type: 'date' })
  birthday: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default Usuario;

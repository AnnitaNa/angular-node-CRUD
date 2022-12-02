import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
@Entity()
export class Usuario {
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
}

import { IsEmail, IsString } from 'class-validator';

export class CreateUsuarioDto {
  @IsString()
  name: string;

  @IsString()
  cpf: string;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsString()
  gender: string;

  @IsString()
  birthday: string;
}

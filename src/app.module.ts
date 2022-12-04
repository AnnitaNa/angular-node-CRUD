import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioModule } from './usuario/usuario.module';

@Module({
  imports: [
    UsuarioModule,
    TypeOrmModule.forRoot({
      database: 'db',
      type: 'sqlite',
      synchronize: true,
      entities: ['dist/**/*.entity.js'],
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

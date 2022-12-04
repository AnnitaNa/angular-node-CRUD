import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {

  usuarios: IUsuario[] = []

  constructor(private userService: UsuarioService) {}

  ngOnInit(): void {
    this.getUsuarios();
  }

  getUsuarios() {
    this.userService.findAll().subscribe(res => {
      this.usuarios = res
    })
  }


  deletarUsuario(id: string) {
    this.userService.remove(id).subscribe(res => {console.log(res)})
    window.location.reload();
  }
  
}

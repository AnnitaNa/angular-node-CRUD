import { Component, OnInit } from '@angular/core';
import { IUsuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent {

  title = 'crud';
  usuarios: IUsuario[] = [
    {
      id: "1",
      name: "User 01",
      cpf: "xxx",
      email: "xxxx",
      phone: "xxx",
      gender: "xxxx",
      birthday: 'Xxxx'
    },
    {
      id: "2",
      name: "User 02",
      cpf: "xxx",
      email: "xxxx",
      phone: "xxx",
      gender: "xxxx",
      birthday: 'Xxxx'
    }
  ]

}

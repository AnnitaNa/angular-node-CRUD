import { Component, OnInit } from '@angular/core';
import {
  AbstractControl, FormBuilder, FormGroup, Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/models/usuario.model';
import { IUsuarioInput } from 'src/app/models/usuarioInput.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-create-update-user',
  templateUrl: './create-update-user.component.html',
  styleUrls: ['./create-update-user.component.css'],
})
export class CreateUpdateUserComponent implements OnInit {
  id!: string | null;

  userForm!: FormGroup;

  genders: Array<string> = [
    'Mulher trans',
    'Mulher cis',
    'Homem trans',
    'Homem cis',
    'Travesti',
    'Não binário',
    'Prefiro não revelar',
    'Outros',
  ];

  constructor(
    private formBuild: FormBuilder,
    private userService: UsuarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.creatUpdateUserForm();
    this.id = this.route.snapshot.paramMap.get('id'); // get the id from route parameter (decided name "id" at the router)
    if (this.id) {
      this.findUser(this.id);
    }
  }

  get formControls(): { [key: string]: AbstractControl; } {
    return this.userForm.controls;
  }

  creatUpdateUserForm() {
    this.userForm = this.formBuild.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      birthday: ['', Validators.required],
    });
  }

  findUser(id:string) {
    return this.userService.findOne(id).subscribe((user) => this.fillForm(user));
  }

  fillForm(user: IUsuario) {
    this.userForm.setValue({
      name: user.name,
      cpf: user.cpf,
      email: user.email,
      phone: user.phone,
      gender: user.gender,
      birthday: user.birthday.split('/').reverse().join('-'),
    });
  }

  save() {
    const data: IUsuarioInput = this.userForm.value;
    this.id
      ? this.userService.update(this.id, data).subscribe(() => this.router.navigate(['']))
      : this.userService.create(data).subscribe(() => this.router.navigate(['']));
  }
}

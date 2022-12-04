import { Component, OnInit } from '@angular/core';
import {  AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IUsuario } from 'src/app/models/usuario.model';
import { IUsuarioInput } from 'src/app/models/usuarioInput.model';

@Component({
  selector: 'app-create-update-user',
  templateUrl: './create-update-user.component.html',
  styleUrls: ['./create-update-user.component.css']
})
export class CreateUpdateUserComponent implements OnInit {

  submitted = false;
 
  userForm!: FormGroup;
  data: string = '';
  constructor(private formBuild: FormBuilder) { }

  ngOnInit(): void {
    this.creatUpdateUserForm();
  }

  get formControls(): { [key: string]: AbstractControl; } {
    return this.userForm.controls
  }

  creatUpdateUserForm() {
    this.userForm = this.formBuild.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      phone: ['', Validators.required],
      gender: ['', Validators.required],
      birthday: ['', Validators.required],
    })

  }

  save() {
    this.submitted = true;

  console.log(this.userForm)
    this.data = JSON.stringify(this.userForm.value);
  }

}

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  hide = true;
  formulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createFormulario();
  }

  cadastrar(){}

  createFormulario(){
    this.formulario = this.formBuilder.group({
      email: ['', Validators.required, Validators.email],
      password: ['', Validators.required],
      password_confirm: ['', Validators.required],
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      sobrenome: ['', Validators.required],
      estado: ['', Validators.required],
      cidade: ['', Validators.required]
    })
  }

}

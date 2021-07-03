import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ValidatorFn, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const invalidCtrl = !!(control && control.invalid && control.parent.dirty);
    const invalidParent = !!(control && control.parent && control.parent.invalid && control.parent.dirty);

    return (invalidCtrl || invalidParent);
  }
}

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  hide = true;
  formulario: FormGroup;
  matcher = new MyErrorStateMatcher();
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.createFormulario();
  }

  cadastrar(){
 
    

  }

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
    }, { validator: this.checkPasswords })
  }

  
  checkPasswords(group: FormControl) {
    let pass = group.get("password").value;
    let confirmPass = group.get("password_confirm").value;

    return pass === confirmPass ? null : { notSame: true }
  }
}

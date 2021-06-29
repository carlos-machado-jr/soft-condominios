import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cad-visitantes',
  templateUrl: './cad-visitantes.component.html',
  styleUrls: ['./cad-visitantes.component.scss']
})
export class CadVisitantesComponent implements OnInit {
  formVisitante: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formVisitantes();
  }

  formVisitantes(){
    this.formVisitante = this.formBuilder.group({
      name: ['', Validators.required],
      cpf: ['', Validators.required],
      type_visitante: ['', Validators.required],
      number_bloco: ['', Validators.required],
      number_apartament: ['', Validators.required]
    })
  }

}

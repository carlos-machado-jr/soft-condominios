import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cad-encomendas',
  templateUrl: './cad-encomendas.component.html',
  styleUrls: ['./cad-encomendas.component.scss']
})
export class CadEncomendasComponent implements OnInit {
  formEncomendas: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formEncomenda();
  }

  formEncomenda(){
    this.formEncomendas = this.formBuilder.group({
      destinatario: ['', Validators.required],
      number_block: ['', Validators.required],
      number_apartament: ['', Validators.required],
      description: ['', Validators.required]
    })
  }

}

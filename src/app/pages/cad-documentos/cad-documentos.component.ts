import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cad-documentos',
  templateUrl: './cad-documentos.component.html',
  styleUrls: ['./cad-documentos.component.scss']
})
export class CadDocumentosComponent implements OnInit {
  formDocumentos: FormGroup;
  required: true;

  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formDocumento();
  }

  formDocumento()
{
  this.formDocumentos = this.formBuilder.group({
    name: ['', Validators.required],
    doc_file: [undefined, Validators.required]
  })
}
}

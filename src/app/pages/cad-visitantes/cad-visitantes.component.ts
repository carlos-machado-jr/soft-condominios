import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { VisitanteService } from '../../share/utils/services/visitante.service';
import { Visitante } from '../../core/models/visitante';
import swet from 'sweetalert2';

@Component({
  selector: 'app-cad-visitantes',
  templateUrl: './cad-visitantes.component.html',
  styleUrls: ['./cad-visitantes.component.scss']
})
export class CadVisitantesComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private visitanteService: VisitanteService) { }

    formulario: FormGroup
    visitante: Visitante = new Visitante();
    id: any;
    loading: any;

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.formVisitantes();
  }

  async cadastrar(){
    this.visitante = {
      apartamento: this.formulario.get('number_apartement').value,
      bloco: this.formulario.get('number_blovo').value,
      condominio: this.id,
      tipoVisitante: this.formulario.get('type_visitante').value,
      status: null,
      sobrenome: this.formulario.get('sobrenome').value,
      nome: this.formulario.get('name').value,
      cpf: this.formulario.get('cpf').value,
      observacao: null
    }
      this.visitanteService.cadastrarVisitante(this.visitante)
        .subscribe(complete => {
          console.log(complete);
          swet.fire('Parabéns!', 'Colaborador cadastrado com sucesso.', 'success');
        }, error => {
          console.log(error);
          let message: string
          let color: string
          switch (error.status) {
            case 500:
              message = 'Erro ao inserir';
              swet.fire('Ops', message, 'error')
              break;

            case 403:
              message = 'Dados Inválidos';
              swet.fire('Ops', message, 'error')
              break;

            case 404:
              message = 'Servidor não encontrado';
              swet.fire('Ops', message, 'error')
              break;

            case 408:
              message = 'Tempo de conexão esgotado';
              swet.fire('Ops', message, 'error')
              break;
          }

          
        })
  }

  formVisitantes(){
    this.formulario = this.formBuilder.group({
      name: ['', Validators.required],
      sobrenome : ['', Validators.required],
      cpf: ['', Validators.required],
      type_visitante: ['', Validators.required],
      number_bloco: ['', Validators.required],
      number_apartament: ['', Validators.required]
    })
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutentiticacaoService {

  public exibirMenu = new BehaviorSubject<boolean>(false);
  public estaLogado = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    
   
  ) { }


  public buscarUsuarioLogado(): boolean{
    return this.estaLogado.getValue();
  }

  public login(){

  }
  public sairDaConta(){

  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AutentiticacaoService {

  email: string;
  senha: string;

  public exibirMenu = new BehaviorSubject<boolean>(false);
  public estaLogado = new BehaviorSubject<boolean>(false);

  constructor(
    private http: HttpClient,
    
   
  ) { }


  public buscarUsuarioLogado(): boolean{
    return this.estaLogado.getValue();
  }

  public login(){
    this.http.post<any>(`${environment.baseUrl}/login`,{ title : "Login request"} ).subscribe(data => {
      this.email = data.email
      this.senha = data.senha
    })

    
  }
  public sairDaConta(){

  }

}

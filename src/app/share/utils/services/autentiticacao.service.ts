import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { tap, finalize, mergeMap, map } from 'rxjs/operators';

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

  login(usuario: any){
    return this.http.post(`${environment.baseUrl}/login`, usuario, {
      observe: 'response',
      responseType: 'text'
    }).pipe(
      tap(response => {
        console.log(response)
        // this.succesfulLogin(response.headers.get('Authorization'))
      })
    );
  }

  public sairDaConta(){

  }

}

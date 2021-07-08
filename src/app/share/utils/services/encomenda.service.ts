import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { tap, finalize, mergeMap, map } from 'rxjs/operators';
import swet from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class EncomendaService {

  constructor(private http: HttpClient) { }

  cadastrarEncomenda(encomenda) {
    return this.http.post(`${environment.baseUrl}/encomendas`, encomenda, {
      observe: 'response',
      responseType: 'text'
    }).pipe(
      tap(response => {
        swet.fire({
          title: 'Atenção!',
          text: "A encomenda foi cadastrada com sucesso!",
          icon: 'success',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Ok!'
        }).then((result) => {
          if (result.isConfirmed) {
            window.location.reload();
          }
        })
      })
    );
  }

  atualizarEncomenda(id: any, encomenda, idCondominio) {
    return this.http.put(`${environment.baseUrl}/encomendas/` + id, encomenda).subscribe(x => {
      swet.fire({
        title: 'Atenção!',
        text: "A encomenda foi entregue com sucesso!",
        icon: 'success',
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Ok!'
      }).then((result) => {
        if (result.isConfirmed) {
          window.location.reload();
        }
      })

      console.log(x);
    }
    )
  }

}

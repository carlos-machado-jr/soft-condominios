import { Injectable } from '@angular/core';
import { tap, finalize, mergeMap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class VisitanteService {

  constructor(private http: HttpClient) { }

  cadastrarVisitante(visitante: any) {
    return this.http.post(`${environment.baseUrl}/visitantes`, visitante, {
      observe: 'response',
      responseType: 'text'
    }).pipe(
      tap(response => {
        console.log(response)
      })
    );
  }

  atualizarVisitante(id: any, visitante) {
    return this.http.put(`${environment.baseUrl}/visitantes/` + id, visitante).subscribe(x => {
      console.log(x);
        }
    )

  }

}
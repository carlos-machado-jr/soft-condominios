import { Component, OnInit } from '@angular/core';
import SwiperCore, { Pagination } from "swiper/core";
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dados: any = [];
  funcao: string;
  sindicoList: any = [];
  condominio: any = []
  constructor(
    private activatedRoute: ActivatedRoute,
    private http: HttpClient
  ) {
   }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.http.get(`${environment.baseUrl}/usuarios/auth`).subscribe(x => {
      let dados = JSON.stringify(x);
      let usuario = dados;
      this.dados = JSON.parse(usuario);
      console.log(this.dados);
      if(this.dados['funcao']){
        this.condominio = this.dados.condominio[0];
        this.funcao = this.dados['funcao'];
        console.log(this.funcao)
      } else{
        this.condominio = this.dados['condominio'];
      }
    })
  }

}

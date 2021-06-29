import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-visitantes',
  templateUrl: './visitantes.component.html',
  styleUrls: ['./visitantes.component.scss'],
})
export class VisitantesComponent implements OnInit {
  constructor() { }

  ngOnInit(): void { }

  displayedColumns: string[] = [
    'name',
    'cpf',
    'destino',
    'entrada',
    'saida',
    'observacao',
    'acoes',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface PeriodicElement {
  name: string;
  cpf: string;
  destino: string;
  entrada: string;
  saida: string;
  observacao: string;
  acoes: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    name: 'Anna',
    cpf: '000.000.000-00',
    destino: 'Bloco 1 - apt 102',
    entrada: '16/05/2021 às 15:54hrs',
    saida: '16/05/2021 às 20:24hrs',
    observacao: 'Qualquer coisa aqui.',
    acoes: 'edit'
  },
  {
    name: 'Grazielle',
    cpf: '000.000.000-00',
    destino: 'Bloco 1 - apt 102',
    entrada: '16/05/2021 às 15:54hrs',
    saida: '16/05/2021 às 20:24hrs',
    observacao: 'Qualquer coisa aqui.',
    acoes: 'edit'
  },
  {
    name: 'Lithium',
    cpf: '000.000.000-00',
    destino: 'Bloco 1 - apt 102',
    entrada: '16/05/2021 às 15:54hrs',
    saida: '16/05/2021 às 20:24hrs',
    observacao: 'Qualquer coisa aqui.',
    acoes: 'edit'
  },
  {
    name: 'Beryllium',
    cpf: '000.000.000-00',
    destino: 'Bloco 1 - apt 102',
    entrada: '16/05/2021 às 15:54hrs',
    saida: '16/05/2021 às 20:24hrs',
    observacao: 'Qualquer coisa aqui.',
    acoes: 'edit'
  },
  {
    name: 'Boron',
    cpf: '000.000.000-00',
    destino: 'Bloco 1 - apt 102',
    entrada: '16/05/2021 às 15:54hrs',
    saida: '16/05/2021 às 20:24hrs',
    observacao: 'Qualquer coisa aqui.',
    acoes: 'edit'
  },
  {
    name: 'Carbon',
    cpf: '000.000.000-00',
    destino: 'Bloco 1 - apt 102',
    entrada: '16/05/2021 às 15:54hrs',
    saida: '16/05/2021 às 20:24hrs',
    observacao: 'Qualquer coisa aqui.',
    acoes: 'edit'
  },
  {
    name: 'Nitrogen',
    cpf: '000.000.000-00',
    destino: 'Bloco 1 - apt 102',
    entrada: '16/05/2021 às 15:54hrs',
    saida: '16/05/2021 às 20:24hrs',
    observacao: 'Qualquer coisa aqui.',
    acoes: 'edit'
  },
  {
    name: 'Oxygen',
    cpf: '000.000.000-00',
    destino: 'Bloco 1 - apt 102',
    entrada: '16/05/2021 às 15:54hrs',
    saida: '16/05/2021 às 20:24hrs',
    observacao: 'Qualquer coisa aqui.',
    acoes: 'edit'
  },
  {
    name: 'Fluorine',
    cpf: '000.000.000-00',
    destino: 'Bloco 1 - apt 102',
    entrada: '16/05/2021 às 15:54hrs',
    saida: '16/05/2021 às 20:24hrs',
    observacao: 'Qualquer coisa aqui.',
    acoes: 'edit'
  },
  {
    name: 'Neon',
    cpf: '000.000.000-00',
    destino: 'Bloco 1 - apt 102',
    entrada: '16/05/2021 às 15:54hrs',
    saida: '16/05/2021 às 20:24hrs',
    observacao: 'Qualquer coisa aqui.',
    acoes: 'edit'
  },
  {
    name: 'Sodium',
    cpf: '000.000.000-00',
    destino: 'Bloco 1 - apt 102',
    entrada: '16/05/2021 às 15:54hrs',
    saida: '16/05/2021 às 20:24hrs',
    observacao: 'Qualquer coisa aqui.',
    acoes: 'edit'
  },
  {
    name: 'Magnesium',
    cpf: '000.000.000-00',
    destino: 'Bloco 1 - apt 102',
    entrada: '16/05/2021 às 15:54hrs',
    saida: '16/05/2021 às 20:24hrs',
    observacao: 'Qualquer coisa aqui.',
    acoes: 'edit'
  },
  {
    name: 'Aluminum',
    cpf: '000.000.000-00',
    destino: 'Bloco 1 - apt 102',
    entrada: '16/05/2021 às 15:54hrs',
    saida: '16/05/2021 às 20:24hrs',
    observacao: 'Qualquer coisa aqui.',
    acoes: 'edit'
  },
  {
    name: 'Silicon',
    cpf: '000.000.000-00',
    destino: 'Bloco 1 - apt 102',
    entrada: '16/05/2021 às 15:54hrs',
    saida: '16/05/2021 às 20:24hrs',
    observacao: 'Qualquer coisa aqui.',
    acoes: 'edit'
  },
  {
    name: 'Phosphorus',
    cpf: '000.000.000-00',
    destino: 'Bloco 1 - apt 102',
    entrada: '16/05/2021 às 15:54hrs',
    saida: '16/05/2021 às 20:24hrs',
    observacao: 'Qualquer coisa aqui.',
    acoes: 'edit'
  },
  {
    name: 'Sulfur',
    cpf: '000.000.000-00',
    destino: 'Bloco 1 - apt 102',
    entrada: '16/05/2021 às 15:54hrs',
    saida: '16/05/2021 às 20:24hrs',
    observacao: 'Qualquer coisa aqui.',
    acoes: 'edit'
  },
  {
    name: 'Chlorine',
    cpf: '000.000.000-00',
    destino: 'Bloco 1 - apt 102',
    entrada: '16/05/2021 às 15:54hrs',
    saida: '16/05/2021 às 20:24hrs',
    observacao: 'Qualquer coisa aqui.',
    acoes: 'edit'
  },
  {
    name: 'Argon',
    cpf: '000.000.000-00',
    destino: 'Bloco 1 - apt 102',
    entrada: '16/05/2021 às 15:54hrs',
    saida: '16/05/2021 às 20:24hrs',
    observacao: 'Qualquer coisa aqui.',
    acoes: 'edit'
  },
  {
    name: 'Potassium',
    cpf: '000.000.000-00',
    destino: 'Bloco 1 - apt 102',
    entrada: '16/05/2021 às 15:54hrs',
    saida: '16/05/2021 às 20:24hrs',
    observacao: 'Qualquer coisa aqui.',
    acoes: 'edit'
  },
  {
    name: 'Calcium',
    cpf: '000.000.000-00',
    destino: 'Bloco 1 - apt 102',
    entrada: '16/05/2021 às 15:54hrs',
    saida: '16/05/2021 às 20:24hrs',
    observacao: 'Qualquer coisa aqui.',
    acoes: 'edit'
  },
];

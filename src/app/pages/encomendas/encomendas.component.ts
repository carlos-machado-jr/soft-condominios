import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-encomendas',
  templateUrl: './encomendas.component.html',
  styleUrls: ['./encomendas.component.scss']
})
export class EncomendasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = [
    'destinatario',
    'bloco',
    'apartamento',
    'data_entrega',
    'descricao',
    'status',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}

export interface PeriodicElement {
  destinatario: string;
  bloco: string;
  apartamento: number;
  data_entrega: string;
  descricao: string;
  status: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    destinatario: 'Anna',
    bloco: '000.000.000-00',
    apartamento: 102,
    data_entrega: '16/05/2021 às 15:54hrs',
    descricao: '16/05/2021 às 20:24hrs',
    status: 'Qualquer coisa aqui.',
  },
  {
    destinatario: 'Grazielle',
    bloco: '000.000.000-00',
    apartamento: 103,
    data_entrega: '16/05/2021 às 15:54hrs',
    descricao: '16/05/2021 às 20:24hrs',
    status: 'Qualquer coisa aqui.',
  },
  {
    destinatario: 'Lithium',
    bloco: '000.000.000-00',
    apartamento: 402,
    data_entrega: '16/05/2021 às 15:54hrs',
    descricao: '16/05/2021 às 20:24hrs',
    status: 'Qualquer coisa aqui.',
  },
  {
    destinatario: 'Beryllium',
    bloco: '000.000.000-00',
    apartamento: 236,
    data_entrega: '16/05/2021 às 15:54hrs',
    descricao: '16/05/2021 às 20:24hrs',
    status: 'Qualquer coisa aqui.',
  },
  {
    destinatario: 'Boron',
    bloco: '000.000.000-00',
    apartamento: 147,
    data_entrega: '16/05/2021 às 15:54hrs',
    descricao: '16/05/2021 às 20:24hrs',
    status: 'Qualquer coisa aqui.',
  },
  {
    destinatario: 'Carbon',
    bloco: '000.000.000-00',
    apartamento: 102,
    data_entrega: '16/05/2021 às 15:54hrs',
    descricao: '16/05/2021 às 20:24hrs',
    status: 'Qualquer coisa aqui.',
  },
  {
    destinatario: 'Nitrogen',
    bloco: '000.000.000-00',
    apartamento: 105,
    data_entrega: '16/05/2021 às 15:54hrs',
    descricao: '16/05/2021 às 20:24hrs',
    status: 'Qualquer coisa aqui.',
  },
  {
    destinatario: 'Oxygen',
    bloco: '000.000.000-00',
    apartamento: 254,
    data_entrega: '16/05/2021 às 15:54hrs',
    descricao: '16/05/2021 às 20:24hrs',
    status: 'Qualquer coisa aqui.',
  },
  {
    destinatario: 'Fluorine',
    bloco: '000.000.000-00',
    apartamento: 336,
    data_entrega: '16/05/2021 às 15:54hrs',
    descricao: '16/05/2021 às 20:24hrs',
    status: 'Qualquer coisa aqui.',
  },
  {
    destinatario: 'Neon',
    bloco: '000.000.000-00',
    apartamento: 102,
    data_entrega: '16/05/2021 às 15:54hrs',
    descricao: '16/05/2021 às 20:24hrs',
    status: 'Qualquer coisa aqui.',
  }
];


import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-visitantes',
  templateUrl: './visitantes.component.html',
  styleUrls: ['./visitantes.component.scss']
})
export class VisitantesComponent implements OnInit {

  constructor(
    public dialog: MatDialog
  ) { }

  ngOnInit(): void {
  }

  openDialog() {
    const dialogRef = this.dialog.open(CadVisitanteComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  displayedColumns: string[] = ['name', 'cpf', 'destino', 'entrada', 'saida', 'observacao'];
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
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'Anna', cpf: '000.000.000-00', destino: 'Bloco 1 - apt 102', entrada: '16/05/2021 às 15:54hrs', saida: '16/05/2021 às 20:24hrs', observacao: 'Qualquer coisa aqui.' },
  { name: 'Grazielle', cpf: '000.000.000-00', destino: 'Bloco 1 - apt 102', entrada: '16/05/2021 às 15:54hrs', saida: '16/05/2021 às 20:24hrs', observacao: 'Qualquer coisa aqui.' },
  { name: 'Lithium', cpf: '000.000.000-00', destino: 'Bloco 1 - apt 102', entrada: '16/05/2021 às 15:54hrs', saida: '16/05/2021 às 20:24hrs', observacao: 'Qualquer coisa aqui.' },
  { name: 'Beryllium', cpf: '000.000.000-00', destino: 'Bloco 1 - apt 102', entrada: '16/05/2021 às 15:54hrs', saida: '16/05/2021 às 20:24hrs', observacao: 'Qualquer coisa aqui.' },
  { name: 'Boron', cpf: '000.000.000-00', destino: 'Bloco 1 - apt 102', entrada: '16/05/2021 às 15:54hrs', saida: '16/05/2021 às 20:24hrs', observacao: 'Qualquer coisa aqui.' },
  { name: 'Carbon', cpf: '000.000.000-00', destino: 'Bloco 1 - apt 102', entrada: '16/05/2021 às 15:54hrs', saida: '16/05/2021 às 20:24hrs', observacao: 'Qualquer coisa aqui.' },
  { name: 'Nitrogen', cpf: '000.000.000-00', destino: 'Bloco 1 - apt 102', entrada: '16/05/2021 às 15:54hrs', saida: '16/05/2021 às 20:24hrs', observacao: 'Qualquer coisa aqui.' },
  { name: 'Oxygen', cpf: '000.000.000-00', destino: 'Bloco 1 - apt 102', entrada: '16/05/2021 às 15:54hrs', saida: '16/05/2021 às 20:24hrs', observacao: 'Qualquer coisa aqui.' },
  { name: 'Fluorine', cpf: '000.000.000-00', destino: 'Bloco 1 - apt 102', entrada: '16/05/2021 às 15:54hrs', saida: '16/05/2021 às 20:24hrs', observacao: 'Qualquer coisa aqui.' },
  { name: 'Neon', cpf: '000.000.000-00', destino: 'Bloco 1 - apt 102', entrada: '16/05/2021 às 15:54hrs', saida: '16/05/2021 às 20:24hrs', observacao: 'Qualquer coisa aqui.' },
  { name: 'Sodium', cpf: '000.000.000-00', destino: 'Bloco 1 - apt 102', entrada: '16/05/2021 às 15:54hrs', saida: '16/05/2021 às 20:24hrs', observacao: 'Qualquer coisa aqui.' },
  { name: 'Magnesium', cpf: '000.000.000-00', destino: 'Bloco 1 - apt 102', entrada: '16/05/2021 às 15:54hrs', saida: '16/05/2021 às 20:24hrs', observacao: 'Qualquer coisa aqui.' },
  { name: 'Aluminum', cpf: '000.000.000-00', destino: 'Bloco 1 - apt 102', entrada: '16/05/2021 às 15:54hrs', saida: '16/05/2021 às 20:24hrs', observacao: 'Qualquer coisa aqui.' },
  { name: 'Silicon', cpf: '000.000.000-00', destino: 'Bloco 1 - apt 102', entrada: '16/05/2021 às 15:54hrs', saida: '16/05/2021 às 20:24hrs', observacao: 'Qualquer coisa aqui.' },
  { name: 'Phosphorus', cpf: '000.000.000-00', destino: 'Bloco 1 - apt 102', entrada: '16/05/2021 às 15:54hrs', saida: '16/05/2021 às 20:24hrs', observacao: 'Qualquer coisa aqui.' },
  { name: 'Sulfur', cpf: '000.000.000-00', destino: 'Bloco 1 - apt 102', entrada: '16/05/2021 às 15:54hrs', saida: '16/05/2021 às 20:24hrs', observacao: 'Qualquer coisa aqui.' },
  { name: 'Chlorine', cpf: '000.000.000-00', destino: 'Bloco 1 - apt 102', entrada: '16/05/2021 às 15:54hrs', saida: '16/05/2021 às 20:24hrs', observacao: 'Qualquer coisa aqui.' },
  { name: 'Argon', cpf: '000.000.000-00', destino: 'Bloco 1 - apt 102', entrada: '16/05/2021 às 15:54hrs', saida: '16/05/2021 às 20:24hrs', observacao: 'Qualquer coisa aqui.' },
  { name: 'Potassium', cpf: '000.000.000-00', destino: 'Bloco 1 - apt 102', entrada: '16/05/2021 às 15:54hrs', saida: '16/05/2021 às 20:24hrs', observacao: 'Qualquer coisa aqui.' },
  { name: 'Calcium', cpf: '000.000.000-00', destino: 'Bloco 1 - apt 102', entrada: '16/05/2021 às 15:54hrs', saida: '16/05/2021 às 20:24hrs', observacao: 'Qualquer coisa aqui.' },
];

@Component({
  selector: 'app-cad-visitante',
  templateUrl: '../cad-visitante/cad-visitante.component.html',
  styleUrls: ['../cad-visitante/cad-visitante.component.scss']
})
export class CadVisitanteComponent{}


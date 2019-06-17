import { Component, Inject, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.scss']
})
export class CollectionsComponent {

  @ViewChild('paginator', { read: MatPaginator }) paginator: MatPaginator
  @ViewChild('paginator1', { read: MatPaginator }) paginator1: MatPaginator

  displayedColumnsLevel: string[] = ['cedula', 'nombre', 'celular', 'monto', 'cobrador'];
  displayedColumnsParallel: string[] = ['cedula', 'nombre', 'celular', 'fecha'];
  nivelesD = []
  paralelosD = []

  niveles = new MatTableDataSource(this.nivelesD);
  paralelos = new MatTableDataSource(this.paralelosD);

  constructor() { }

  ngOnInit() {
    this.niveles = new MatTableDataSource(this.nivelesD);
    this.niveles.paginator = this.paginator;
    this.paralelos = new MatTableDataSource(this.paralelosD);
    this.paralelos.paginator = this.paginator1;
  }

}

import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent implements OnInit {

  //variables para ordenar y paginar de la tabla
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  //variables para setear datos de la tabla
  collegeData = [];
  displayedColumns: string[] = ['cedula', 'vigencia', 'proximoPago'];
  dataSource;

  constructor() { }

  ngOnInit() {
  }

  // funcion para realizar la busqueda en la tabla
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  // funcion para agregar o editar
  addOrUpdate(id?: number) {
    console.log(id);
    
  }
}
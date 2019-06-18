import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'app-consult',
  templateUrl: './consult.component.html',
  styleUrls: ['./consult.component.scss']
})
export class ConsultComponent implements OnInit {

  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatPaginator) paginator: MatPaginator;

  collegeData = [];
  displayedColumns: string[] = ['cedula', 'vigencia', 'proximoPago'];
  dataSource;

  constructor() { }

  ngOnInit() {
    this.collegeData.push({ cedula: '0123456789', fechaV: '14/06/2019', fechaP: '14/07/2019'})
    this.dataSource = new MatTableDataSource(this.collegeData);
    this.dataSource.paginator = this.paginator;
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
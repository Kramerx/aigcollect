import { Component, Inject, ViewChild } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

    @ViewChild('paginator', { read: MatPaginator }) paginator: MatPaginator
    @ViewChild('paginator1', { read: MatPaginator }) paginator1: MatPaginator

    displayedColumnsLevel: string[] = ['cedula', 'nombre', 'celular', 'monto', 'cobrador'];
    displayedColumnsParallel: string[] = ['cedula', 'nombre', 'celular', 'fecha'];
    cobrosD = []
    polizasD = []

    cobros = new MatTableDataSource(this.cobrosD);
    polizas = new MatTableDataSource(this.polizasD);

    constructor() { }

    ngOnInit() {
        this.cobrosD.push({ cedula: '0123456789', nombre: 'Carlos Perez', celular: '0987654321', monto: 200, cobrador: 'Andres Andrade' })
        this.cobros = new MatTableDataSource(this.cobrosD);
        this.cobros.paginator = this.paginator;
        this.polizasD.push({ cedula: '0123456789', nombre: 'Carlos Perez', celular: '0987654321', fecha:'18/06/2019' })
        this.polizas = new MatTableDataSource(this.polizasD);
        this.polizas.paginator = this.paginator1;
    }

}

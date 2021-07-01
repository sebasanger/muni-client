import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Concepto } from 'src/app/models/concepto';
import { LiquidacionConcepto } from 'src/app/models/liquidacionConcepto';
import { LiquidacionConceptoService } from 'src/app/services/EntityServices/liquidacion-concepto.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-conceptos-list',
  templateUrl: './conceptos-list.component.html',
  styleUrls: ['./conceptos-list.component.scss'],
})
export class ConceptosListComponent implements OnInit {
  @Input() liquidacionConcepto: LiquidacionConcepto[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  public dataSource: MatTableDataSource<LiquidacionConcepto>;

  displayedColumns: string[] = [
    'descripcion',
    'importe',
    'concepto.tipoConcepto',
    'cantidad',
    'subtotal',
  ];

  constructor(
    public dialog: MatDialog,
    private liquidacionConceptoService: LiquidacionConceptoService
  ) {}
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.liquidacionConcepto);
    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, 500);
  }
}

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
    'cantidad',
    'subtotal',
    'delete',
  ];

  constructor(
    public dialog: MatDialog,
    private liquidacionConceptoService: LiquidacionConceptoService
  ) {}
  ngOnInit(): void {
    this.dataSource = new MatTableDataSource(this.liquidacionConcepto);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  delete(concepto: Concepto) {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.liquidacionConceptoService.delete(concepto.id);
      } else {
        Swal.fire('Cancelled', 'The concepto is safe', 'success');
      }
    });
  }
}

import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { TipoLiquidacion } from 'src/app/models/tipoLiquidacion';
import { TipoLiquidacionService } from 'src/app/services/EntityServices/tipo-liquidacion.service';
import Swal from 'sweetalert2';
import { CreateUpdateTipoLiquidacionComponent } from './create-update-tipo-liquidacion/create-update-tipo-liquidacion.component';

@Component({
  selector: 'app-tipo-liquidaciones',
  templateUrl: './tipo-liquidaciones.component.html',
  styleUrls: ['./tipo-liquidaciones.component.scss'],
})
export class TipoLiquidacionesComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'tipoLiquidacion', 'edit', 'delete'];
  public dataSource: MatTableDataSource<TipoLiquidacion>;
  private subscription: Subscription = new Subscription();
  loading$: Observable<boolean>;
  tipoLiquidaciones$: Observable<TipoLiquidacion[]>;

  constructor(
    private tipoLiquidacionService: TipoLiquidacionService,
    public dialog: MatDialog
  ) {
    this.tipoLiquidaciones$ = tipoLiquidacionService.entities$;
    this.loading$ = tipoLiquidacionService.loading$;

    this.getTipoLiquidacioness();

    let registers$ = this.tipoLiquidaciones$.subscribe(
      (res: TipoLiquidacion[]) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    );

    this.subscription.add(registers$);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(title: string, id?: number, tipoLiquidacion?: string): void {
    this.dialog.open(CreateUpdateTipoLiquidacionComponent, {
      width: '600px',
      height: '400px',
      data: { id: id, tipoLiquidacion: tipoLiquidacion, title: title },
    });
  }

  delete(tipoLiquidacion: TipoLiquidacion) {
    Swal.fire({
      title: 'Esta seguro?',
      text: 'Esto no se puede revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.tipoLiquidacionService.delete(tipoLiquidacion.id);
      } else {
        Swal.fire('Cancelado', 'No se realizo la eliminacion', 'success');
      }
    });
  }

  getTipoLiquidacioness() {
    this.tipoLiquidacionService.getAll();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

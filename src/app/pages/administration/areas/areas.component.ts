import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Observable, Subscription } from 'rxjs';
import { Area } from 'src/app/models/area';
import { AreaService } from 'src/app/services/EntityServices/area.service';
import Swal from 'sweetalert2';
import { CreateUpdateAreasComponent } from './create-update-areas/create-update-areas.component';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss'],
})
export class AreasComponent {
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  displayedColumns: string[] = ['id', 'area', 'codigo', 'edit', 'delete'];
  public dataSource: MatTableDataSource<Area>;
  private subscription: Subscription = new Subscription();
  loading$: Observable<boolean>;
  areas$: Observable<Area[]>;

  constructor(private areaService: AreaService, public dialog: MatDialog) {
    this.areas$ = areaService.entities$;
    this.loading$ = areaService.loading$;

    this.getAreaess();

    let registers$ = this.areas$.subscribe((res: Area[]) => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.subscription.add(registers$);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDialog(title: string, id?: number, area?: string, codigo?: String): void {
    this.dialog.open(CreateUpdateAreasComponent, {
      width: '600px',
      height: '400px',
      data: { id: id, area: area, codigo: codigo, title: title },
    });
  }

  delete(area: Area) {
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
        this.areaService.delete(area.id);
      } else {
        Swal.fire('Cancelado', 'No se realizo la eliminacion', 'success');
      }
    });
  }

  getAreaess() {
    this.areaService.getAll();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { merge, Observable, Subject, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, tap } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { LiquidacionService } from 'src/app/services/EntityServices/liquidacion.service';
import { GetPaginatedLiquidaciones } from 'src/app/interfaces/liquidaciones/get-paginated-liquidaciones';
@Component({
  selector: 'app-view-liquidaciones',
  templateUrl: './view-liquidaciones.component.html',
  styleUrls: ['./view-liquidaciones.component.scss'],
})
export class ViewLiquidacionesComponent implements OnInit {
  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  @ViewChild('input') input: ElementRef;
  constructor(
    private liquidacionService: LiquidacionService,
    private router: Router
  ) {}

  public paginatedLiquidaciones$ =
    this.liquidacionService.paginatedLiquidaciones$;
  public paginatedLiquidaciones: GetPaginatedLiquidaciones;
  public filterSubject = new Subject<string>();
  public loading: boolean;
  public error$: Observable<boolean>;
  public defaultSort: Sort = { active: 'id', direction: 'asc' };
  public dataSource: MatTableDataSource<any>;
  private subscription: Subscription = new Subscription();
  public totalElements: number = 0;
  public filter: string = '';
  public displayedColumns = [
    'id',
    'user.fullName',
    'periodo',
    'tipoLiquidacion.tipo',
    'totalRemuneracionConAportes',
    'totalRemuneracionSinAportes',
    'deducciones',
    'totalCobrar',
    'edit',
    'delete',
  ];

  ngOnInit() {
    const suscription = this.paginatedLiquidaciones$.subscribe(
      (res: GetPaginatedLiquidaciones) => {
        if (res != null && res.content.length > 0) {
          this.dataSource = new MatTableDataSource(res.content);
          this.totalElements = res.totalElements;
        }
      }
    );

    this.subscription.add(suscription);
  }

  ngAfterViewInit() {
    this.loadLiquidacionPage();

    let filter$ = this.filterSubject.pipe(
      debounceTime(150),
      distinctUntilChanged(),
      tap((value: string) => {
        this.paginator.pageIndex = 0;
        this.filter = value;
      })
    );

    let sort$ = this.sort.sortChange.pipe(
      tap(() => (this.paginator.pageIndex = 0))
    );

    this.subscription.add(
      merge(filter$, sort$, this.paginator.page)
        .pipe(tap(() => this.loadLiquidacionPage()))
        .subscribe()
    );
  }

  loadLiquidacionPage() {
    this.liquidacionService.getPaginatedLiquidaciones(
      this.filter.toLocaleLowerCase(),
      this.sort.direction,
      this.sort.active,
      this.paginator.pageIndex,
      this.paginator.pageSize
    );
  }

  public retry(): void {
    this.loadLiquidacionPage();
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  addNewLiquidacion() {
    this.router.navigateByUrl('pages/liquidaciones/create');
  }

  editLiquidacion(userid: number) {
    this.router.navigateByUrl('pages/liquidaciones/update/' + userid);
  }

  deleteLiquidacion(id: number) {
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
        this.liquidacionService.delete(id);
        setTimeout(() => {
          this.loadLiquidacionPage();
        }, 500);
      } else {
        Swal.fire('Cancelled', 'the liquidacion is safe', 'warning');
      }
    });
  }

  onRowClicked(row: any) {
    this.router.navigateByUrl('pages/liquidaciones/details/' + row.id);
  }
}

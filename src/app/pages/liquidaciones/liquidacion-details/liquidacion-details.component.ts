import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Liquidacion } from 'src/app/models/liquidacion';
import { LiquidacionConcepto } from 'src/app/models/liquidacionConcepto';
import { LiquidacionService } from 'src/app/services/EntityServices/liquidacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-liquidacion-details',
  templateUrl: './liquidacion-details.component.html',
  styleUrls: ['./liquidacion-details.component.scss'],
})
export class LiquidacionDetailsComponent implements OnInit {
  private liquidacionId: number;
  public liquidacion: Liquidacion;
  public liquidacionConcepto: LiquidacionConcepto[];
  public cols: number;
  constructor(
    private liquidacionService: LiquidacionService,
    private route: ActivatedRoute,
    private router: Router,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.liquidacionId = params['id'];

      if (this.liquidacionId > 0) {
        this.liquidacionService
          .getByKey(this.liquidacionId)
          .subscribe((res) => {
            this.liquidacion = res;
            this.liquidacionConcepto = res.liquidacionConceptos;
          });
      }
    });
    this.breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe((state: BreakpointState) => {
        if (state.breakpoints[Breakpoints.XSmall]) {
          this.cols = 1;
        }
        if (state.breakpoints[Breakpoints.Small]) {
          this.cols = 1;
        }
        if (state.breakpoints[Breakpoints.Medium]) {
          this.cols = 1;
        }
        if (state.breakpoints[Breakpoints.Large]) {
          this.cols = 2;
        }
        if (state.breakpoints[Breakpoints.XLarge]) {
          this.cols = 2;
        }
      });
  }

  editLiquidacion(userid: number) {
    this.router.navigateByUrl('pages/liquidaciones/update/' + userid);
  }

  deleteLiquidacion(id: number) {
    Swal.fire({
      title: 'Esta seguro que desea eliminar esta liquiacion?',
      text: 'Esto no se puede revertir!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, eliminar!',
    }).then((result: any) => {
      if (result.isConfirmed) {
        this.liquidacionService.delete(id);

        this.router.navigateByUrl('pages/users');
      } else {
        Swal.fire('Cancelao', 'La liquiacion no fue eliminada', 'info');
      }
    });
  }
}

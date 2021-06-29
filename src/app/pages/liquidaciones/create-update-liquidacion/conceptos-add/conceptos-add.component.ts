import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CreateUpdateLiquidacionPayload } from 'src/app/interfaces/liquidaciones/CreateUpdateLiquidacion';
import { Liquidacion } from 'src/app/models/liquidacion';
import { TipoLiquidacion } from 'src/app/models/tipoLiquidacion';
import { User } from 'src/app/models/user.model';
import { LiquidacionService } from 'src/app/services/EntityServices/liquidacion.service';
import { TipoLiquidacionService } from 'src/app/services/EntityServices/tipo-liquidacion.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-conceptos-add',
  templateUrl: './conceptos-add.component.html',
  styleUrls: ['./conceptos-add.component.scss'],
})
export class ConceptosAddComponent implements OnInit {
  public liquidacionId: number;
  private ngUnsubscribe: Subject<boolean> = new Subject();
  public liquidacion: Liquidacion;
  users$: Observable<User[]>;
  tipoLiquidaciones$: Observable<TipoLiquidacion[]>;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private liquidacionService: LiquidacionService,
    private router: Router,
    private userService: UserService,
    private tipoLiquidacionService: TipoLiquidacionService
  ) {}
  ngOnInit(): void {
    this.userService.getAll();
    this.tipoLiquidacionService.getAll();

    this.users$ = this.userService.entities$;
    this.tipoLiquidaciones$ = this.tipoLiquidacionService.entities$;

    this.route.params.subscribe((params) => {
      this.liquidacionId = params['id'];
      takeUntil(this.ngUnsubscribe);
      if (this.liquidacionId > 0) {
        this.liquidacionService
          .getByKey(this.liquidacionId)
          .subscribe((res: Liquidacion) => {
            this.loadLiquidacion(res);
          });
      }
    });
  }

  liquidacionForm = this.fb.group({
    user: [null, [Validators.required]],
    tipoLiquidacion: [null, Validators.required],
    periodo: [null, Validators.required],
    seccion: [null, Validators.required],
  });

  loadLiquidacion(liquidacion: Liquidacion) {
    if (liquidacion != null) {
      this.liquidacionId = liquidacion.id;
      this.liquidacion = liquidacion;
      this.liquidacionForm.controls['user'].setValue(liquidacion.user);
      this.liquidacionForm.controls['tipoLiquidacion'].setValue(
        liquidacion.tipoLiquidacion.id
      );
      this.liquidacionForm.controls['periodo'].setValue(liquidacion.periodo);
      this.liquidacionForm.controls['seccion'].setValue(liquidacion.seccion);
    }
  }

  onSubmit() {
    if (this.liquidacionForm.invalid) {
      console.log('ilegak');

      return;
    }

    const periodo = new Date(this.liquidacionForm.get('periodo').value);
    const { user, tipoLiquidacion, seccion } = this.liquidacionForm.controls;

    const liquidacionRequestPayload: CreateUpdateLiquidacionPayload = {
      userId: user.value,
      tipoLiquidacionId: tipoLiquidacion.value,
      periodo: periodo.toISOString().slice(0, 10),
      seccion: seccion.value,
      conceptos: null,
    };
    console.log(liquidacionRequestPayload);

    /*
    if (this.liquidacionId > 0) {
      liquidacionRequestPayload.id = this.liquidacionId;
      this.liquidacionService.updateLiquidacion(liquidacionRequestPayload);
    } else {
      this.liquidacionService.createLiquidacion(liquidacionRequestPayload);
    }
    this.router.navigateByUrl('pages/liquidacions');
    */
  }

  ngOnDestroy(): void {
    this.ngUnsubscribe.next(true);
    this.ngUnsubscribe.complete();
  }
}

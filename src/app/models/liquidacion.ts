import { LiquidacionConcepto } from './liquidacionConcepto';
import { TipoLiquidacion } from './tipoLiquidacion';
import { User } from './user.model';

export class Liquidacion {
  constructor(
    public liquidacionConceptos: LiquidacionConcepto[],
    public area: string,
    public createdAt: Date,
    public deducciones: number,
    public fechaIngreso: Date,
    public numeroRecibo: number,
    public legajo: number,
    public periodo: Date,
    public seccion: string,
    public totalNoRemunerativo: number,
    public totalDeducciones: number,
    public totalRemunerativo: number,
    public total: number,
    public updatedAt: Date,
    public tipoLiquidacion: TipoLiquidacion,
    public user: User,
    public id?: number
  ) {}
}

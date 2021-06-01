import { LiquidacionConcepto } from './liquidacionConcepto';
import { TipoLiquidacion } from './tipoLiquidacion';
import { User } from './user.model';

export class Liquidacion {
  constructor(
    public liquidacionConcepto: LiquidacionConcepto,
    public area: string,
    public createdAt: Date,
    public deducciones: number,
    public fechaIngreso: Date,
    public numeroRecibo: number,
    public periodo: Date,
    public seccion: string,
    public totalCobrar: number,
    public totalRemuneracionConAportes: number,
    public totalRemuneracionSinAportes: number,
    public updatedAt: Date,
    public tipoLiquidacion: TipoLiquidacion,
    public user: User,
    public id?: number
  ) {}
}

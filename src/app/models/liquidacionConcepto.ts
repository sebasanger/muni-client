import { Concepto } from './concepto';
import { Liquidacion } from './liquidacion';
import { LiquidacionConceptoKey } from './liquidacionConceptoKey';

export class LiquidacionConcepto {
  constructor(
    public id: LiquidacionConceptoKey,
    public liquidacion: Liquidacion,
    public concepto: Concepto,
    public cantidad: number,
    public importe: number
  ) {}
}

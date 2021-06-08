import { Concepto } from './concepto';
import { Liquidacion } from './liquidacion';

export class LiquidacionConcepto {
  constructor(
    public id: number,
    public concepto: Concepto,
    public cantidad: number,
    public importe: number
  ) {}
}

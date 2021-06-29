import { Concepto } from './concepto';

export class LiquidacionConcepto {
  constructor(
    public id: number,
    public concepto: Concepto,
    public cantidad: number,
    public importe: number
  ) {}
}

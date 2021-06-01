import { TipoConcepto } from './tipoConcepto';

export class Concepto {
  constructor(
    public descripcion: string,
    public importe: number,
    public tipoConcepto: TipoConcepto,
    public id?: number
  ) {}
}

export class Concepto {
  constructor(
    public descripcion: string,
    public importe: number,
    public tipoConcepto: String,
    public id?: number
  ) {}
}

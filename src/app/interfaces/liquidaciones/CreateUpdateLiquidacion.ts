import { ConceptoPayload } from './ConceptosPayload';

export interface CreateUpdateLiquidacionPayload {
  id?: number;
  userId: number;
  tipoLiquidacionId: number;
  periodo: string;
  seccion: number;
  conceptos: ConceptoPayload[];
}

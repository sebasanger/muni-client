import { User } from 'src/app/models/user.model';

export interface GetPaginatedLiquidaciones {
  content: [
    {
      id: number;
      user: User;
      area: string;
      fechaIngreso: Date;
      periodo: Date;
      seccion: string;
      numeroRecibo: number;
      totalRemuneracionConAportes: number;
      totalRemuneracionSinAportes: number;
      deducciones: number;
      totalCobrar: number;
      createdAt: Date;
      updatedAt: Date;
    }
  ];
  pageable: {
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    sort: { sorted: boolean; empty: boolean };
  };
  size: number;
  totalElements: number;
  totalPages: number;
}

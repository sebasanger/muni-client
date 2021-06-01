import { EntityMetadataMap, EntityDataModuleConfig } from '@ngrx/data';

const entityMetadata: EntityMetadataMap = {
  Concepto: {
    entityName: 'Concepto',
    entityDispatcherOptions: { optimisticDelete: false },
  },
  TipoLiquidacion: {
    entityName: 'TipoLiquidacion',
    entityDispatcherOptions: { optimisticDelete: false },
  },
  TipoConcepto: {
    entityName: 'TipoConcepto',
    entityDispatcherOptions: { optimisticDelete: false },
  },
  Liquidacion: {
    entityName: 'Liquidacion',
    entityDispatcherOptions: { optimisticDelete: false },
  },
  LiquidacionConcepto: {
    entityName: 'LiquidacionConcepto',
    entityDispatcherOptions: { optimisticDelete: false },
  },
  Area: {
    entityName: 'Area',
    entityDispatcherOptions: { optimisticDelete: false },
  },
};

const pluralNames = {
  Concepto: 'concepto',
  TipoLiquidacion: 'tipoliquidacion',
  TipoConcepto: 'tipoconcepto',
  Liquidacion: 'liquidacion',
  LiquidacionConcepto: 'liquidacionconcepto',
  Area: 'area',
};

export const entityConfig: EntityDataModuleConfig = {
  entityMetadata,
  pluralNames,
};

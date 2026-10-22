import { Cardinality } from '../enums/cardinality'
import type { TOptional } from './t-shared'

interface IRelationEdge {
  id: string
  sourceTableId: string
  sourceFieldName: string
  targetTableId: string
  targetFieldName: string
  cardinality: Cardinality
  lastPulseAt: TOptional<number>
}

export type { IRelationEdge }

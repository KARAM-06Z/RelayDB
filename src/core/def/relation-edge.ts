import { Base } from './base'
import { Cardinality } from '../enums/cardinality'
import type { IRelationEdge } from '../meta/i-relation-edge'
import type { TOptional } from '../meta/t-shared'

class RelationEdge extends Base<IRelationEdge> implements IRelationEdge {
  id!: string
  sourceTableId!: string
  sourceFieldName!: string
  targetTableId!: string
  targetFieldName!: string
  cardinality!: Cardinality
  lastPulseAt!: TOptional<number>

  deserialize({
    id = '',
    sourceTableId = '',
    sourceFieldName = '',
    targetTableId = '',
    targetFieldName = '',
    cardinality = Cardinality.ONE_TO_MANY,
    lastPulseAt,
  }: Partial<IRelationEdge> = {}): void {
    const resolvedId = id || `${sourceTableId}.${sourceFieldName}->${targetTableId}.${targetFieldName}`
    this.primaryKey('id', resolvedId)
    this.sourceTableId = sourceTableId
    this.sourceFieldName = sourceFieldName
    this.targetTableId = targetTableId
    this.targetFieldName = targetFieldName
    this.cardinality = cardinality
    this.lastPulseAt = lastPulseAt
  }

  triggerPulse(): void {
    this.lastPulseAt = Date.now()
  }
}

export { RelationEdge }

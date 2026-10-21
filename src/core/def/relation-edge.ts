import { Base } from './base'
import type { IRelationEdge } from '../meta/i-relation-edge'

class RelationEdge extends Base<IRelationEdge> implements IRelationEdge {
  id!: string
  sourceTableId!: string
  sourceColumnId!: string
  targetTableId!: string
  targetColumnId!: string

  deserialize({ id = '', sourceTableId = '', sourceColumnId = '', targetTableId = '', targetColumnId = '' }: Partial<IRelationEdge> = {}): void {
    this.primaryKey('id', id)
    this.sourceTableId = sourceTableId
    this.sourceColumnId = sourceColumnId
    this.targetTableId = targetTableId
    this.targetColumnId = targetColumnId
  }
}

export { RelationEdge }

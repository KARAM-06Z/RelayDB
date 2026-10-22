import { Base } from './base'
import { Column } from './column'
import { MutationAction } from '../enums/mutation-action'
import { Schema } from '../enums/schema'
import type { IColumn } from '../meta/i-column'
import type { ITableNode } from '../meta/i-table-node'
import type { TNullable, TOptional, TPosition } from '../meta/t-shared'

class TableNode extends Base<ITableNode> implements ITableNode {
  id!: string
  name!: TNullable<string>
  schema!: Schema
  columns!: IColumn[]
  rowCount!: number
  position!: TPosition
  lastAction!: TOptional<MutationAction>
  lastActivityAt!: TOptional<number>

  deserialize({ id = '', name = null, schema = Schema.PUBLIC, columns = [], rowCount = 0, position = { x: 0, y: 0 }, lastAction, lastActivityAt }: Partial<ITableNode> = {}): void {
    const resolvedId = id || `${Schema[schema]}.${name ?? 'unknown'}`
    this.primaryKey('id', resolvedId)
    this.name = name
    this.schema = schema
    this.columns = columns.map(col => new Column(col))
    this.rowCount = rowCount
    this.position = { ...position }
    this.lastAction = lastAction
    this.lastActivityAt = lastActivityAt
  }

  addColumn(column: IColumn): void {
    this.columns.push(new Column(column))
  }

  removeColumn(columnId: string): void {
    this.columns = this.columns.filter(col => col.id !== columnId)
  }

  updatePosition(x: number, y: number): void {
    this.position.x = x
    this.position.y = y
  }

  registerMutation(action: MutationAction): void {
    this.lastAction = action
    this.lastActivityAt = Date.now()
    if (action === MutationAction.INSERT) this.rowCount++
    if (action === MutationAction.DELETE && this.rowCount > 0) this.rowCount--
  }
}

export { TableNode }

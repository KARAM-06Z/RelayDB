import { Base } from './base'
import { Column } from './column'
import type { ITableNode } from '../meta/i-table-node'
import type { TNullable } from '../meta/t-shared'

class TableNode extends Base<ITableNode> implements ITableNode {
  id!: string
  name!: TNullable<string>
  x!: number
  y!: number
  rowCount!: number
  columns!: Column[]

  deserialize({ id = '', name = null, x = 0, y = 0, rowCount = 0, columns = [] }: Partial<ITableNode> = {}): void {
    this.primaryKey('id', id)
    this.name = name
    this.x = x
    this.y = y
    this.rowCount = rowCount
    this.columns = columns.map(col => col instanceof Column ? col : new Column(col))
  }

  addColumn(column: Column): void {
    this.columns.push(column)
  }

  removeColumn(columnId: string): void {
    this.columns = this.columns.filter(col => col.id !== columnId)
  }
}

export { TableNode }

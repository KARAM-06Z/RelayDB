import type { IColumn } from './i-column'
import type { TNullable } from './t-shared'

interface ITableNode {
  id: string
  name: TNullable<string>
  x: number
  y: number
  rowCount: number
  columns: IColumn[]
}

export type { ITableNode }

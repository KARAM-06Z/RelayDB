import { MutationAction } from '../enums/mutation-action'
import { Schema } from '../enums/schema'
import type { IColumn } from './i-column'
import type { TNullable, TOptional, TPosition } from './t-shared'

interface ITableNode {
  id: string
  name: TNullable<string>
  schema: Schema
  columns: IColumn[]
  rowCount: number
  position: TPosition
  lastAction: TOptional<MutationAction>
  lastActivityAt: TOptional<number>
}

export type { ITableNode }

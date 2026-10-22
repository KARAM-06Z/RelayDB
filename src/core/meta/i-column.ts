import { KeyType } from '../enums/key-type'
import type { TForeignKeyTarget, TNullable, TOptional } from './t-shared'

interface IColumn {
  id: string
  name: TNullable<string>
  dataType: TNullable<string>
  keyType: KeyType
  isNullable: boolean
  defaultValue: TNullable<string>
  foreignKeyTarget: TOptional<TForeignKeyTarget>
}

export type { IColumn }

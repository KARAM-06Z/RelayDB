import { KeyType } from '../enums/key-type'
import type { TNullable } from './t-shared'

interface IColumn {
  id: string
  name: TNullable<string>
  dataType: TNullable<string>
  keyType: KeyType
  isNullable: boolean
  defaultValue: TNullable<string>
}

export type { IColumn }

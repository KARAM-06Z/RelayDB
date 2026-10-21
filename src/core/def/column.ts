import { Base } from './base'
import { KeyType } from '../enums/key-type'
import type { IColumn } from '../meta/i-column'
import type { TNullable } from '../meta/t-shared'

class Column extends Base<IColumn> implements IColumn {
  id!: string
  name!: TNullable<string>
  dataType!: TNullable<string>
  keyType!: KeyType
  isNullable!: boolean
  defaultValue!: TNullable<string>

  deserialize({ id = '', name = null, dataType = null, keyType = KeyType.NONE, isNullable = false, defaultValue = null }: Partial<IColumn> = {}): void {
    this.primaryKey('id', id)
    this.name = name
    this.dataType = dataType
    this.keyType = keyType
    this.isNullable = isNullable
    this.defaultValue = defaultValue
  }
}

export { Column }

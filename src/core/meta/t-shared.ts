type TOptional<T> = T | undefined
type TNullable<T> = T | null

type TPosition = {
  x: number
  y: number
}

type TForeignKeyTarget = {
  table: string
  field: string
}

export type { TOptional, TNullable, TPosition, TForeignKeyTarget }

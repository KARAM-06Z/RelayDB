import { EventType } from '../enums/event-type'
import { MutationType } from '../enums/mutation-type'
import { SchemaAction } from '../enums/schema-action'
import type { TNullable } from './t-shared'

type TStreamEvent<T = Record<string, unknown>> = {
  id: string
  timestamp: number
  eventType: EventType
  action: SchemaAction | MutationType
  tableId: string
  payload: TNullable<T>
}

type TEventSubscription = (event: TStreamEvent) => void
type TUnsubscribe = () => void

export type { TStreamEvent, TEventSubscription, TUnsubscribe }

import type { TEventSubscription, TUnsubscribe } from './t-event'

interface IDataStreamProvider {
  connect(): Promise<void>
  disconnect(): void
  subscribe(handler: TEventSubscription): TUnsubscribe
}

export type { IDataStreamProvider }

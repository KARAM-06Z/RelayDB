import { MutationAction } from '../enums/mutation-action'
import { StreamEventType } from '../enums/stream-event-type'
import type { IRelationEdge } from './i-relation-edge'
import type { ITableNode } from './i-table-node'

type TStreamEvent =
  | {
      id: string
      type: StreamEventType.SCHEMA_SNAPSHOT
      timestamp: number
      payload: {
        tables: ITableNode[]
        edges: IRelationEdge[]
      }
    }
  | {
      id: string
      type: StreamEventType.SCHEMA_MUTATED
      timestamp: number
      payload: {
        tables: ITableNode[]
        edges: IRelationEdge[]
        diffDescription: string
      }
    }
  | {
      id: string
      type: StreamEventType.ROW_MUTATED
      timestamp: number
      payload: {
        tableId: string
        action: MutationAction
        row: Record<string, unknown>
        relatedEdgeIds: string[]
      }
    }

type TEventSubscription = (event: TStreamEvent) => void
type TUnsubscribe = () => void

export type { TStreamEvent, TEventSubscription, TUnsubscribe }

import { create } from 'zustand'
import type { TNullable } from '../core/meta/t-shared'
import type { TStreamEvent } from '../core/meta/t-event'

type TLedgerStore = {
  events: TStreamEvent[]
  selectedTableId: TNullable<string>
  pushEvent: (event: TStreamEvent) => void
  setSelectedTableId: (id: TNullable<string>) => void
  clearEvents: () => void
}

const MAX_EVENTS = 50

const useLedgerStore = create<TLedgerStore>(set => ({
  events: [],
  selectedTableId: null,

  pushEvent: (event: TStreamEvent) => {
    set(state => ({
      events: [event, ...state.events].slice(0, MAX_EVENTS),
    }))
  },

  setSelectedTableId: (id: TNullable<string>) => {
    set({ selectedTableId: id })
  },

  clearEvents: () => {
    set({ events: [] })
  },
}))

export { useLedgerStore }

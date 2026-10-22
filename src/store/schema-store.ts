import { create } from 'zustand'
import type { RelationEdge } from '../core/def/relation-edge'
import type { TableNode } from '../core/def/table-node'

type TSchemaStore = {
  tables: Record<string, TableNode>
  edges: RelationEdge[]
  setTables: (tables: TableNode[]) => void
  addTable: (table: TableNode) => void
  removeTable: (tableId: string) => void
  updateTablePosition: (tableId: string, x: number, y: number) => void
  setEdges: (edges: RelationEdge[]) => void
  addEdge: (edge: RelationEdge) => void
  removeEdge: (edgeId: string) => void
}

const useSchemaStore = create<TSchemaStore>(set => ({
  tables: {},
  edges: [],

  setTables: (tables: TableNode[]) => {
    const tableMap: Record<string, TableNode> = {}
    tables.forEach(table => {
      tableMap[table.id] = table
    })
    set({ tables: tableMap })
  },

  addTable: (table: TableNode) => {
    set(state => ({
      tables: {
        ...state.tables,
        [table.id]: table,
      },
    }))
  },

  removeTable: (tableId: string) => {
    set(state => {
      const nextTables = { ...state.tables }
      delete nextTables[tableId]
      const nextEdges = state.edges.filter(
        edge => edge.sourceTableId !== tableId && edge.targetTableId !== tableId,
      )
      return {
        tables: nextTables,
        edges: nextEdges,
      }
    })
  },

  updateTablePosition: (tableId: string, x: number, y: number) => {
    set(state => {
      const table = state.tables[tableId]
      if (!table) return state
      table.updatePosition(x, y)
      return {
        tables: {
          ...state.tables,
          [tableId]: table,
        },
      }
    })
  },

  setEdges: (edges: RelationEdge[]) => {
    set({ edges })
  },

  addEdge: (edge: RelationEdge) => {
    set(state => ({
      edges: [...state.edges, edge],
    }))
  },

  removeEdge: (edgeId: string) => {
    set(state => ({
      edges: state.edges.filter(edge => edge.id !== edgeId),
    }))
  },
}))

export { useSchemaStore }

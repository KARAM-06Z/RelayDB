import { InfiniteCanvas } from './components/infinite-canvas'
import { TableCard } from './components/table-card'

function App() {
  return (
    <main className="w-screen h-screen overflow-hidden">
      <InfiniteCanvas>
        <TableCard />
      </InfiniteCanvas>
    </main>
  )
}

export { App }

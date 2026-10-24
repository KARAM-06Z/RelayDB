import { Accent } from '../core/enums/accent'
import { formatNumber } from '../core/utils/number'
import { pluralForm } from '../core/utils/string'
import { Badge } from './shared/badge'

function TableCard() {
  return (
    <div className="table-card" data-canvas-node="true">
      <header className="m-3">
        <h1>users</h1>
        <Badge accent={Accent.MUTED}>
          <span className="circle-sm bg-success mr-1"></span>
          <span>
            {formatNumber(2214)} {pluralForm(2214, 'row')}
          </span>
        </Badge>
      </header>
    </div>
  )
}

export { TableCard }

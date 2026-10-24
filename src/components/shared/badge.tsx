import { Accent } from '../../core/enums/accent'

type TBadgeProps = { children?: React.ReactNode; accent?: Accent }

function Badge({ children, accent }: TBadgeProps) {
  return <span className={`badge badge-${accent}`}>{children}</span>
}

export { Badge }

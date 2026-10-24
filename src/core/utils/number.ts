import type { TNullable } from '../meta/t-shared'

const formatNumber = (number: number, notation: TNullable<'standard' | 'compact'> = null): string => {
  notation = notation || (number >= 1000000 ? 'compact' : 'standard')
  return new Intl.NumberFormat('en-US', {
    notation,
    compactDisplay: 'short',
    maximumFractionDigits: 2
  }).format(number)
}

export { formatNumber }

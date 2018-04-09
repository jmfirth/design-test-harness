import hexRgb from 'hex-rgb'

export const rgba = (hex: string, alpha: number) =>
  `rgba(${hexRgb(hex, { format: 'array' })
    .slice(0, 3)
    .join(', ')}, ${alpha})`

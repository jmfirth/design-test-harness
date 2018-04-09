import * as t from 'io-ts'

export const Breakpoints = t.interface({
  mobile: t.number,
  tablet: t.number,
  smallDesktop: t.number,
  largeDesktop: t.number
})
export interface Breakpoints extends t.TypeOf<typeof Breakpoints> {}

export type Breakpoint = keyof Breakpoints

export const breakpoints: Breakpoint[] = ['largeDesktop', 'smallDesktop', 'tablet', 'mobile']

export const Grid = t.interface({
  columns: t.number,
  gutters: Breakpoints,
  container: Breakpoints
})
export interface Grid extends t.TypeOf<typeof Grid> {}

export const Config = t.interface({
  breakpoints: Breakpoints,
  grid: t.union([Grid, t.undefined])
})
export interface Config extends t.TypeOf<typeof Config> {}

export function isConfig(obj: any): obj is Config {
  return obj && Breakpoints.is(obj.breakpoints) && Grid.is(obj.grid)
}

export function getHeight(): number {
  return Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
}

export function getWidth(): number {
  return Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
}

export function getBreakpoints(config: Config): Breakpoints | undefined {
  return config ? config.breakpoints : undefined
}

export function getBreakpoint(config: Config): Breakpoint | undefined {
  const height = getHeight()
  return breakpoints.reduce((a, v) => (a || config.breakpoints[v] >= height ? a : v))
}

export function getGridColumn(config: Config) {
  const height = getHeight()
  const width = getWidth()
  const breakpoint = getBreakpoint(config)
  // config.grid.columns
}

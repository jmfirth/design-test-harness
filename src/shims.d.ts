declare module 'hex-rgb' {
  type Vector4<T> = [T, T, T, T]

  interface RGBA {
    red: number
    green: number
    blue: number
    alpha: number
  }

  interface FormatTypeMap {
    array: Vector4<number>
  }

  type FormatTypes = keyof FormatTypeMap | undefined

  export interface Options<F extends FormatTypes = undefined> {
    format?: F
  }

  type ReturnTypeMap<F extends FormatTypes> = F extends keyof FormatTypeMap
    ? FormatTypeMap[F]
    : RGBA

  export default function hexRgb(hex: string): RGBA
  export default function hexRgb<F extends FormatTypes>(
    hex: string,
    options: Options<F>
  ): ReturnTypeMap<F>
}

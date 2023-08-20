export type Motion = {
  name: string
  x: (t: number) => number
  y: (t: number) => number
  precision: number
  color: string
}

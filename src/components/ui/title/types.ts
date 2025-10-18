/* eslint-disable @typescript-eslint/no-magic-numbers */
export type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6

/* eslint-disable @typescript-eslint/no-magic-numbers */
export type TitleSize = 1 | 2 | 3 | 4 | 5 | 6

export interface ITitleProps {
  level: TitleLevel
  size: TitleSize
  uppercase?: boolean
  asLabel?: boolean
  labelFor?: string
  children: ReactNode
}

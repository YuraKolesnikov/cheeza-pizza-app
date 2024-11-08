import { ReactElement, ReactPortal } from 'react'

type ReactText = string | number
type ReactChild = ReactElement | ReactText

interface ReactNodeArray extends Array<ReactNode> {}

export type ReactNode =
  | ReactChild
  | ReactNodeArray
  | ReactPortal
  | boolean
  | null
  | undefined

import { createElement } from 'react'

import { useTitle } from './use-title'

/* eslint-disable @typescript-eslint/no-magic-numbers */
type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6

/* eslint-disable @typescript-eslint/no-magic-numbers */
type TitleSize = 1 | 2 | 3 | 4 | 5 | 6

export interface ITitleProps {
  level: TitleLevel
  size: TitleSize
  uppercase?: boolean
  asLabel?: boolean
  labelFor?: string
  children: ReactNode
}

export const Title = (props: ITitleProps) => {
  const { tag, titleProps } = useTitle(props)
  return createElement(tag, titleProps, props.children)
}

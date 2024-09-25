import { createElement } from 'react'
import cn from 'classnames'

import styles from './styles.module.pcss'

type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6

type TitleSize = 1 | 2 | 3 | 4 | 5 | 6

interface ITitleProps {
  level: TitleLevel
  size: TitleSize
  uppercase?: boolean
  asLabel?: boolean
  labelFor?: string
  children: ReactNode
}

export const Title = ({
  level = 1,
  size = 1,
  uppercase = false,
  asLabel = false,
  labelFor,
  children,
}: ITitleProps) => {
  const classNames = cn(
    styles.title,
    styles[`title--${size}`],
    {
      [styles['title--uppercase']]: uppercase,
    }
  )

  return createElement(
    asLabel ? 'label' : `h${level}`,
    {
      className: classNames,
      ...(asLabel && {
        for: labelFor,
      }),
    },
    children
  )
}

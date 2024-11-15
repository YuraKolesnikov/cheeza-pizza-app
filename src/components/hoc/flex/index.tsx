import { MouseEventHandler } from 'react'
import cn from 'classnames'

import styles from './index.module.pcss'

export interface IFlexProps {
  align: 'center' | 'start' | 'end' | 'stretch'
  justify: 'center' | 'start' | 'between' | 'around' | 'evenly'
  gap: number
  tag: 'div' | 'button'
  className?: string
  onClick?: MouseEventHandler<HTMLDivElement | HTMLButtonElement>
  children: ReactNode
}

export const Flex = ({
  align = 'center',
  justify = 'center',
  gap = 0,
  tag = 'div',
  className,
  onClick,
  children,
}: IFlexProps) => {
  const classList = cn(
    styles['flex'],
    styles[`align--${align}`],
    styles[`justify--${justify}`],
    className
  )

  const flexProps = {
    className: classList,
    style: {
      gap,
    },
    onClick,
  }

  return tag === 'div' ? (
    <div {...flexProps}>{children}</div>
  ) : (
    <button {...flexProps}>{children}</button>
  )
}

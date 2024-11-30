import { MouseEventHandler } from 'react'
import cn from 'classnames'

import styles from './index.module.pcss'

export interface IFlexProps {
  align: 'center' | 'start' | 'end' | 'stretch'
  justify: 'center' | 'start' | 'between' | 'around' | 'evenly'
  gap: number
  tag: 'div' | 'button' | 'label'
  className?: string
  onClick?: MouseEventHandler<HTMLDivElement | HTMLButtonElement>
  htmlFor?: string
  children: ReactNode
}

export const Flex = ({
  align = 'center',
  justify = 'center',
  gap = 0,
  tag = 'div',
  className,
  onClick,
  htmlFor,
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
    ...(tag === 'label' && {
      htmlFor,
    }),
  }

  return tag === 'div' ? (
    <div onClick={onClick} {...flexProps}>
      {children}
    </div>
  ) : tag === 'label' ? (
    <label {...flexProps}>{children}</label>
  ) : (
    <button onClick={onClick} {...flexProps}>
      {children}
    </button>
  )
}

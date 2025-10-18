import cn from 'classnames'

import { IFlexProps } from './types'

import styles from './index.module.pcss'

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

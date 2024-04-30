import { useMemo } from 'react'
import classNames from 'classnames'

import styles from './styles.module.pcss'

import { IButtonProps } from '.'

export const useButton = ({
  children,
  className,
  onClick,
  type,
  size,
  font,
  theme,
  radius,
  uppercase,
  disabled,
  to,
}: IButtonProps) => {
  const elementType = to ? 'link' : 'button'

  const classList = classNames(
    styles.button,
    styles[`button--${theme}`],
    styles[`button--${size}`],
    styles[`button--${radius}`],
    styles[`button--font-${font}`],
    {
      [styles['button--uppercase']]: uppercase,
      [styles['button--disabled']]: disabled,
    },
    className
  )

  const elementProps = useMemo(() => {
    return {
      className: classList,
      children,
      ...(elementType === 'button' ? {
        disabled,
        type,
        onClick,
      } : {
        role: 'button',
        to,
      }),
    }
  }, [
    children,
    classList,
    disabled,
    elementType,
    onClick,
    to,
    type,
  ])

  return {
    elementProps,
    elementType,
  }
}

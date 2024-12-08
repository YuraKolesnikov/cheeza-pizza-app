import { FC, MouseEvent } from 'react'
import { Link } from 'react-router-dom'

import { EIcons, Icon } from 'components/ui/icon'
import { useButton } from './use-button'

import styles from './styles.module.pcss'

export interface IButtonProps {
  children: ReactNode
  className: string
  onClick?: MouseEvent<HTMLElement>
  type?: 'button' | 'submit' | 'reset'
  theme: 'primary' | 'secondary'
  size: 's' | 'l'
  radius: 'rounded' | 'chip'
  font: 'regular' | 'light'
  prependIcon?: EIcons
  uppercase?: boolean
  disabled?: boolean
  block?: boolean
  to?: string
}

export const Button: FC = (props: IButtonProps) => {
  const { elementProps, elementType } = useButton(props)
  const { children, prependIcon } = props

  const content = (
    <>
      {children}
      {prependIcon && (
        <Icon className={styles.button__icon} name={prependIcon} />
      )}
    </>
  )

  return elementType === 'button' ? (
    <button {...elementProps}>{content}</button>
  ) : (
    <Link {...elementProps}>{content}</Link>
  )
}

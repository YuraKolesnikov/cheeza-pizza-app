import { MouseEvent } from 'react'

import { EIcons } from 'components/ui/icon'

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

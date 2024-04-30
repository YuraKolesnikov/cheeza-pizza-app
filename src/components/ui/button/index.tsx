import { FC, MouseEvent } from 'react'
import { Link } from 'react-router-dom'

import { useButton } from './use-button'

export interface IButtonProps {
  children: ReactNode
  className: string
  onClick?: MouseEvent<HTMLElement>
  type?: 'button' | 'submit' | 'reset'
  theme: 'primary' | 'secondary'
  size: 's' | 'l'
  radius: 'rounded' | 'chip'
  font: 'regular' | 'light'
  uppercase?: boolean
  disabled?: boolean
  block?: boolean
  to?: string
}

export const Button: FC = (props: IButtonProps) => {
  const { elementProps, elementType } = useButton(props)
  return elementType === 'button' ? (
    <button {...elementProps} />
  ) : (
    <Link {...elementProps} />
  )
}

import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Icon } from '../icon'

import { useButton } from './use-button'
import { IButtonProps } from './types'

import styles from './styles.module.pcss'

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

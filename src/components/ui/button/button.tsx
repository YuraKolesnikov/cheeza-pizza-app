import { FC } from 'react'
import { Link } from 'react-router-dom'

import { Flex } from 'components'
import { Icon } from '../icon'

import { useButton } from './use-button'
import { IButtonProps } from './types'

import styles from './styles.module.pcss'

export const Button: FC = (props: IButtonProps) => {
	const {
		elementProps,
		elementType,
		prependIcon,
		prependCounter,
		counterValue,
		children,
	} = useButton(props)

	const content = (
		<>
			{children}
			{prependIcon && (
				<>
					{children && <div className={styles['button__icon-separator']} />}
					<Icon iconClassName={styles.button__icon} name={prependIcon} />
				</>
			)}
			{prependCounter && (
				<Flex
					align='center'
					justify='center'
					className={styles.button__counter}
				>
					{counterValue}
				</Flex>
			)}
		</>
	)

	return elementType === 'button' ? (
		<button {...elementProps}>{content}</button>
	) : (
		<Link {...elementProps}>{content}</Link>
	)
}

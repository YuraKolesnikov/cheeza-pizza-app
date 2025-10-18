import { useMemo } from 'react'
import cn from 'classnames'

import styles from './styles.module.pcss'

import { IButtonProps } from './types'

export const useButton = ({
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
	prependIcon,
	prependCounter,
	counterValue,
	children,
}: IButtonProps) => {
	const elementType = to ? 'link' : 'button'

	const classList = cn(
		styles.button,
		styles[`button--${theme}`],
		styles[`button--${size}`],
		children && [styles[`button--${radius}`], styles[`button--font-${font}`]],
		!children && styles['button--no-text'],
		uppercase && styles['button--uppercase'],
		disabled && styles['button--disabled'],
		className
	)

	const elementProps = useMemo(() => {
		return {
			className: classList,
			...(elementType === 'button'
				? {
						disabled,
						type,
						onClick,
				  }
				: {
						role: 'button',
						to,
				  }),
		}
	}, [classList, disabled, elementType, onClick, to, type])

	return {
		elementProps,
		elementType,
		prependIcon,
		prependCounter,
		counterValue,
		children,
	}
}

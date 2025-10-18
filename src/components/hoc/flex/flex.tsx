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

	if (tag === 'button') {
		return (
			<button onClick={onClick} {...flexProps}>
				{children}
			</button>
		)
	}

	if (tag === 'label') {
		return <label {...flexProps}>{children}</label>
	}

	return (
		<div onClick={onClick} {...flexProps}>
			{children}
		</div>
	)
}

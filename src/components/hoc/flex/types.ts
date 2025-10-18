import { MouseEventHandler } from 'react'

export interface IFlexProps {
	align: 'center' | 'start' | 'end' | 'stretch'
	justify: 'center' | 'start' | 'between' | 'around' | 'evenly'
	gap?: number
	tag?: 'div' | 'button' | 'label'
	className?: string
	onClick?: MouseEventHandler<HTMLDivElement | HTMLButtonElement>
	htmlFor?: string
	children: ReactNode
}

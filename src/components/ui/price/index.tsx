import cn from 'classnames'

import { usePrice } from './use-price'

import styles from './style.module.pcss'

interface IPriceProps {
  price: number
  size: 's' | 'l'
  color: 'gray' | 'green'
}

export const Price = ({ price, size = 'l', color = 'green' }: IPriceProps) => {
  const { formattedPrice } = usePrice(price)

  const classList = cn(
    styles.price,
    styles[`price--${size}`],
    styles[`price--${color}`]
  )

  return <p className={classList}>{formattedPrice}</p>
}

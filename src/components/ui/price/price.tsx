import cn from 'classnames'

import { usePrice } from './use-price'
import { IPriceProps } from './types'

import styles from './style.module.pcss'

export const Price = ({
  price,
  size = 'l',
  color = 'green',
  condensed = false,
}: IPriceProps) => {
  const { formattedPrice } = usePrice(price)

  const classList = cn(
    styles.price,
    styles[`price--${size}`],
    styles[`price--${color}`],
    {
      [styles['price--condensed']]: condensed,
    }
  )

  return <p className={classList}>{formattedPrice}</p>
}

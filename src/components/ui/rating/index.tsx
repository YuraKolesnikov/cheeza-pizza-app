import cn from 'classnames'

import { Icon } from 'components'

import styles from './styles.module.pcss'
interface IRatingProps {
  productId: string
  rating: number
  withNumber?: boolean
}

/* eslint-disable @typescript-eslint/no-magic-numbers */
const STARS = [1, 2, 3, 4, 5]

export const Rating = ({ productId, rating, withNumber }: IRatingProps) => {
  return (
    <div className={styles['rating-wrapper']}>
      <div className={styles['stars-wrapper']}>
        {STARS.map(id => (
          <Icon
            name="star"
            className={cn(styles.star, {
              [styles['star--filled']]: rating >= id,
            })}
            key={`${productId}_rating_${id}`}
          />
        ))}
      </div>
      {withNumber && <span className={styles.rating}>{rating}</span>}
    </div>
  )
}

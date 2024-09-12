import cn from 'classnames'

import styles from './styles.module.pcss'

interface IStarIconProps {
  isHighlighted: boolean
}

const StarIcon = ({ isHighlighted }: IStarIconProps) => (
  <svg
    className={cn(
      styles.star,
      { [styles['star--filled']]: isHighlighted }
    )}
    width="15"
    height="13"
    viewBox="0 0 15 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M7.33867 0.25L9.4761 4.36492L14.258 5.02492L10.7982 8.22731L11.6148 12.75L7.33867 10.6151L3.0622 12.75L3.87883 8.22731L0.419312 5.02492L5.20124 4.36492L7.33867 0.25Z"
    />
  </svg>

)

interface IRatingProps {
  productId: string
  rating: number
}

const STARS = [1, 2, 3, 4, 5]

export const Rating = ({ productId, rating }: IRatingProps) => {
  return (
    <div className={styles['rating-wrapper']}>
      <div className={styles['stars-wrapper']}>
        {STARS.map((id) => <StarIcon isHighlighted={rating >= id} key={`${productId}_rating_${id}`} />)}
      </div>
      <span className={styles.rating}>{rating}</span>
    </div>
  )
}

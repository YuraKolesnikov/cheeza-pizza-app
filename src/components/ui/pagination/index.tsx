import cn from 'classnames'

import { Flex } from 'components'

import styles from './styles.module.pcss'

export interface IPaginationProps {
  id: string
  value: string
  options: {
    value: string
    label: string
  }[] /* TODO: Вынести в общий тип Option */
  onChange: (val: string) => void
}

const PaginationItem = ({
  value,
  label,
  isActive,
  onClick,
}: {
  value: string
  label: string
  isActive: boolean
  onClick: (val: string) => void
}) => (
  <Flex
    tag="label"
    htmlFor={value}
    className={cn(
      styles['pagination-item'],
      /* TODO: Продумать, как решить проблему ховера/клика на мобилках */
      isActive && styles['pagination-item--active']
    )}
  >
    {label}
    <input
      type="radio"
      id={value}
      value={value}
      onChange={() => onClick(value)}
      checked={isActive}
    />
  </Flex>
)

export const Pagination = ({
  id,
  value,
  options,
  onChange,
}: IPaginationProps) => {
  if (!options || !options?.length) {
    return null
  }

  return (
    <Flex className={styles['pagination']} gap={5}>
      {options.map(o => (
        <PaginationItem
          key={`${id}_${o.value}`}
          {...o}
          isActive={value === o.value}
          onClick={onChange}
        />
      ))}
    </Flex>
  )
}

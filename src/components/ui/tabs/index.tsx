import cn from 'classnames'
import { Flex } from 'components'

import styles from './tabs.module.pcss'

export interface ITabOption {
  id: string
  label: string
}

interface ITabOptionProp extends ITabOption {
  onChange: (o: string) => void
  isActive: boolean
}

interface ITabsProps {
  value: string
  options: ITabOption[]
  onChange: (o: string) => void
}

const TabOption = ({ id, label, onChange, isActive }: ITabOptionProp) => (
  <label
    className={cn(styles.tab, isActive && styles['tab--active'])}
    htmlFor={id}
  >
    <span>{label}</span>
    <input
      id={id}
      value={id}
      onChange={() => onChange(id)}
      checked={isActive}
      type="radio"
    />
  </label>
)

export const Tabs = ({ value, options, onChange }: ITabsProps) => {
  if (!options?.length) {
    return null
  }
  return (
    <Flex className={styles.tabs} align="center" justify="between">
      {options.map(o => (
        <TabOption
          id={o.id}
          label={o.label}
          onChange={onChange}
          isActive={o.id === value}
        />
      ))}
    </Flex>
  )
}

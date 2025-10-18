interface ITabOption {
  id: string
  label: string
}

export interface ITabOptionProps extends ITabOption {
  onChange: (o: string) => void
  isActive: boolean
}

export interface ITabsProps {
  value: string
  options: ITabOption[]
  onChange: (o: string) => void
}

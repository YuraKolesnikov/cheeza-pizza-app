export interface IPaginationItemProps {
  value: string
  label: string
  isActive: boolean
  onClick: (val: string) => void
}

export interface IPaginationProps {
  id: string
  value: string
  options: {
    value: string
    label: string
  }[] /* TODO: Вынести в общий тип Option */
  onChange: (val: string) => void
}

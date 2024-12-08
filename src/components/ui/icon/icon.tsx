import { EIcons } from './types'
import { ICONS } from './icons'

interface IIconProps {
  name: EIcons
  className?: string
}

export const Icon = ({ name, className }: IIconProps) => {
  const IconComponent = ICONS[name]

  if (IconComponent) {
    return <IconComponent className={className} />
  }
}

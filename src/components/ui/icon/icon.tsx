import { EIcons } from './types'
import { ICONS } from './icons'

interface IIconProps {
  name: EIcons
  iconClassName?: string
}

export const Icon = ({ name, iconClassName }: IIconProps) => {
  const IconComponent = ICONS[name]

  if (IconComponent) {
    return <IconComponent className={iconClassName} />
  }
}

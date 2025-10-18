import { ICONS } from './icons'

import { IIconProps } from './types'

export const Icon = ({ name, iconClassName }: IIconProps) => {
  const IconComponent = ICONS[name]

  if (IconComponent) {
    return <IconComponent className={iconClassName} />
  }
}

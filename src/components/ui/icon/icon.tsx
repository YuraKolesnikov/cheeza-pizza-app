import AlarmClock from './icons/alarm_clock.svg'
import ArrowDown from './icons/arrow_down.svg'
import ArrowRight from './icons/arrow_right.svg'
import Bacon from './icons/bacon.svg'
import Cart from './icons/cart.svg'
import CheckmarkOutline from './icons/checkmark_outline.svg'
import Checkmark from './icons/checkmark.svg'
import Cheese from './icons/cheese.svg'
import Chicken from './icons/chicken.svg'
import CircleOutline from './icons/circle_outline.svg'
import Circle from './icons/circle.svg'
import CloseOutline from './icons/close_outline.svg'
import Close from './icons/close.svg'
import Cutlery from './icons/cutlery.svg'
import Home from './icons/home.svg'
import MenuDesserts from './icons/menu_desserts.svg'
import MenuDrinks from './icons/menu_drinks.svg'
import MenuPasta from './icons/menu_pasta.svg'
import MenuPizza from './icons/menu_pizza.svg'
import MenuSalads from './icons/menu_salads.svg'
import Menu from './icons/menu.svg'
import Mushroom from './icons/mushroom.svg'
import Notebook from './icons/notebook.svg'
import Olives from './icons/olives.svg'
import Onion from './icons/onion.svg'
import Pencil from './icons/pencil.svg'
import Pepper from './icons/pepper.svg'
import Phone from './icons/phone.svg'
import Pizza from './icons/pizza.svg'
import Plus from './icons/plus.svg'
import Sausage from './icons/sausage.svg'
import Shrimp from './icons/shrimp.svg'
import Star from './icons/star.svg'

import { EIcons } from './types'

const ICONS = {
  alarm_clock: AlarmClock,
  arrow_down: ArrowDown,
  arrow_right: ArrowRight,
  bacon: Bacon,
  cart: Cart,
  checkmark_outline: CheckmarkOutline,
  checkmark: Checkmark,
  cheese: Cheese,
  chicken: Chicken,
  circle_outline: CircleOutline,
  circle: Circle,
  close_outline: CloseOutline,
  close: Close,
  cutlery: Cutlery,
  home: Home,
  menu_desserts: MenuDesserts,
  menu_drinks: MenuDrinks,
  menu_pasta: MenuPasta,
  menu_pizza: MenuPizza,
  menu_salads: MenuSalads,
  menu: Menu,
  mushroom: Mushroom,
  notebook: Notebook,
  olives: Olives,
  onion: Onion,
  pencil: Pencil,
  pepper: Pepper,
  phone: Phone,
  pizza: Pizza,
  plus: Plus,
  sausage: Sausage,
  shrimp: Shrimp,
  star: Star,
}

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

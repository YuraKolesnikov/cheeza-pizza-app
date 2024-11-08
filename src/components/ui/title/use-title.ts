import cn from 'classnames'

import styles from './styles.module.pcss'

import { ITitleProps } from './index'

export function useTitle({
  level = 1,
  size = 1,
  uppercase = false,
  asLabel = false,
  labelFor,
}: ITitleProps): { tag: string; titleProps: Record<string, unknown> } {
  const classNames = cn(styles.title, styles[`title--${size}`], {
    [styles['title--uppercase']]: uppercase,
  })

  const tag = asLabel ? 'label' : `h${level}`

  const titleProps = {
    className: classNames,
    ...(asLabel && {
      for: labelFor,
    }),
  }

  return {
    tag,
    titleProps,
  }
}

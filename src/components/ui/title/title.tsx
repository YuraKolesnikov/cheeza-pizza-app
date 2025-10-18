import { createElement } from 'react'

import { useTitle } from './use-title'
import { ITitleProps } from './types'

export const Title = (props: ITitleProps) => {
  const { tag, titleProps } = useTitle(props)
  return createElement(tag, titleProps, props.children)
}

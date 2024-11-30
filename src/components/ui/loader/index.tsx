import cn from 'classnames'

import { Flex } from 'components'

import styles from './loader.module.pcss'

export const Loader = () => (
  <Flex
    className={styles.loader}
    align="center"
    justify-content="center"
    gap={20}
  >
    <span className={cn(styles.dot, styles['dot--1'])} />
    <span className={cn(styles.dot, styles['dot--2'])} />
    <span className={cn(styles.dot, styles['dot--3'])} />
    <span className={cn(styles.dot, styles['dot--4'])} />
    <span className={cn(styles.dot, styles['dot--5'])} />
  </Flex>
)

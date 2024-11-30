import { useState } from 'react'

import {
  Button,
  Rating,
  Price,
  Title,
  Pagination,
  Icon,
  EIcons,
  Loader,
} from 'components/ui'

import styles from './index.module.pcss'

export const Home = () => {
  const [activePage, setActivePage] = useState<number>(1)
  const options = [
    { value: 1, label: 1 },
    { value: 2, label: 2 },
    { value: 3, label: 3 },
    { value: 4, label: 4 },
  ]
  return (
    <section>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <h1>Buttons</h1>
        <Button
          theme="primary"
          size="l"
          radius="rounded"
          font="regular"
          uppercase
        >
          Order now
        </Button>
        <Button
          className={styles.specialButton}
          theme="primary"
          size="l"
          radius="rounded"
          font="regular"
          uppercase
          to={'/about'}
        >
          Special
        </Button>
        <Button theme="primary" size="s" radius="rounded" uppercase>
          Create your own
        </Button>
        <Button
          theme="secondary"
          size="l"
          radius="rounded"
          font="light"
          uppercase
        >
          Add to bag
        </Button>
        <Button theme="secondary" size="s" radius="rounded" uppercase>
          Click me
        </Button>
      </div>

      <h2>Rating</h2>
      <Rating rating={5} />
      <Rating rating={3.75} withNumber />

      <h2>Price</h2>
      <Price price={2595} />
      <Price price={250000} size="m" />
      <Price price={1723} size="s" color="gray" condensed />

      <h2>Typography</h2>
      <Title>Hello World!</Title>
      <Title size={3} labelFor="quantity" asLabel uppercase>
        Quantity
      </Title>
      <Pagination
        id="main_page_pagination"
        value={activePage}
        onChange={setActivePage}
        options={options}
      />
      <Loader />
      <Icon name={EIcons.ALARM_CLOCK} className={styles.icon} />
      <Icon name={EIcons.ARROW_DOWN} className={styles.icon} />
      <Icon name={EIcons.ARROW_RIGHT} className={styles.icon} />
      <Icon name={EIcons.BACON} className={styles.icon} />
      <Icon name={EIcons.CART} className={styles.icon} />
      <Icon
        name={EIcons.CHECKMARK_OUTLINE}
        className={styles['icon-outline']}
      />
      <Icon name={EIcons.CHECKMARK} className={styles.icon} />
      <Icon name={EIcons.CHEESE} className={styles.icon} />
      <Icon name={EIcons.CHICKEN} className={styles.icon} />
      <Icon name={EIcons.CIRCLE_OUTLINE} className={styles['icon-outline']} />
      <Icon name={EIcons.CIRCLE} className={styles.icon} />
      <Icon name={EIcons.CLOSE_OUTLINE} className={styles['icon-outline']} />
      <Icon name={EIcons.CLOSE} className={styles.icon} />
      <Icon name={EIcons.CUTLERY} className={styles.icon} />
      <Icon name={EIcons.HOME} className={styles.icon} />
      <Icon name={EIcons.MENU_DESSERTS} className={styles.icon} />
      <Icon name={EIcons.MENU_DRINKS} className={styles.icon} />
      <Icon name={EIcons.MENU_PASTA} className={styles.icon} />
      <Icon name={EIcons.MENU_PIZZA} className={styles.icon} />
      <Icon name={EIcons.MENU_SALADS} className={styles.icon} />
      <Icon name={EIcons.MENU} className={styles.icon} />
      <Icon name={EIcons.MUSHROOM} className={styles.icon} />
      <Icon name={EIcons.NOTEBOOK} className={styles.icon} />
      <Icon name={EIcons.OLIVES} className={styles.icon} />
      <Icon name={EIcons.ONION} className={styles.icon} />
      <Icon name={EIcons.PENCIL} className={styles.icon} />
      <Icon name={EIcons.PEPPER} className={styles.icon} />
      <Icon name={EIcons.PHONE} className={styles.icon} />
      <Icon name={EIcons.PIZZA} className={styles['pizza-icon']} />
      <Icon name={EIcons.PLUS} className={styles.icon} />
      <Icon name={EIcons.SAUSAGE} className={styles.icon} />
      <Icon name={EIcons.SHRIMP} className={styles.icon} />
      <Icon name={EIcons.STAR} className={styles.icon} />
    </section>
  )
}

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
  Tabs,
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
  const [activeTab, setActiveTab] = useState<string>('book')
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
          prependIcon={EIcons.ARROW_RIGHT}
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
        <Button
          theme="primary"
          size="s"
          radius="rounded"
          prependIcon={EIcons.ARROW_RIGHT}
          uppercase
        >
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
      <Tabs
        value={activeTab}
        onChange={setActiveTab}
        options={[
          { id: 'book', label: 'Book' },
          { id: 'description', label: 'Description' },
          { id: 'comment', label: 'Comment' },
        ]}
      />
      <Icon name={EIcons.ALARM_CLOCK} iconClassName={styles.icon} />
      <Icon name={EIcons.ARROW_DOWN} iconClassName={styles.icon} />
      <Icon name={EIcons.ARROW_RIGHT} iconClassName={styles.icon} />
      <Icon name={EIcons.BACON} iconClassName={styles.icon} />
      <Icon name={EIcons.CART} iconClassName={styles.icon} />
      <Icon
        name={EIcons.CHECKMARK_OUTLINE}
        iconClassName={styles['icon-outline']}
      />
      <Icon name={EIcons.CHECKMARK} iconClassName={styles.icon} />
      <Icon name={EIcons.CHEESE} iconClassName={styles.icon} />
      <Icon name={EIcons.CHICKEN} iconClassName={styles.icon} />
      <Icon
        name={EIcons.CIRCLE_OUTLINE}
        iconClassName={styles['icon-outline']}
      />
      <Icon name={EIcons.CIRCLE} iconClassName={styles.icon} />
      <Icon
        name={EIcons.CLOSE_OUTLINE}
        iconClassName={styles['icon-outline']}
      />
      <Icon name={EIcons.CLOSE} iconClassName={styles.icon} />
      <Icon name={EIcons.CUTLERY} iconClassName={styles.icon} />
      <Icon name={EIcons.HOME} iconClassName={styles.icon} />
      <Icon name={EIcons.MENU_DESSERTS} iconClassName={styles.icon} />
      <Icon name={EIcons.MENU_DRINKS} iconClassName={styles.icon} />
      <Icon name={EIcons.MENU_PASTA} iconClassName={styles.icon} />
      <Icon name={EIcons.MENU_PIZZA} iconClassName={styles.icon} />
      <Icon name={EIcons.MENU_SALADS} iconClassName={styles.icon} />
      <Icon name={EIcons.MENU} iconClassName={styles.icon} />
      <Icon name={EIcons.MUSHROOM} iconClassName={styles.icon} />
      <Icon name={EIcons.NOTEBOOK} iconClassName={styles.icon} />
      <Icon name={EIcons.OLIVES} iconClassName={styles.icon} />
      <Icon name={EIcons.ONION} iconClassName={styles.icon} />
      <Icon name={EIcons.PENCIL} iconClassName={styles.icon} />
      <Icon name={EIcons.PEPPER} iconClassName={styles.icon} />
      <Icon name={EIcons.PHONE} iconClassName={styles.icon} />
      <Icon name={EIcons.PIZZA} iconClassName={styles['pizza-icon']} />
      <Icon name={EIcons.PLUS} iconClassName={styles.icon} />
      <Icon name={EIcons.SAUSAGE} iconClassName={styles.icon} />
      <Icon name={EIcons.SHRIMP} iconClassName={styles.icon} />
      <Icon name={EIcons.STAR} iconClassName={styles.icon} />
    </section>
  )
}

import { useState } from 'react'

import { Button, Rating, Price, Title, Pagination } from 'components/ui'

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
    </section>
  )
}

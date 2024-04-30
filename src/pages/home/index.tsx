import { observer } from 'mobx-react-lite'
import userStore from 'store'
import { getTypeOf } from 'lib/get-type-of/get-type-of'

export const Home = observer(() => {
  const promise = new Promise((resolve) => {
    resolve()
  })
  console.log(getTypeOf(promise))
  return (
    <section>
      <button onClick={() => userStore.updateName('Yura', 'Kolesnikov')}>
        Yura Kolesnikov
      </button>
      <button onClick={() => userStore.updateName('Yana', 'Kolesnikova')}>
        Yana Kolesnikova
      </button>
      <p>{userStore.fullName}</p>
    </section>
  )
})

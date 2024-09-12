const HUNDRED = 100

export function usePrice(price: number) {
  let formattedPrice = ''

  if (!price) {
    console.error('No price provided!')
  } else {
    formattedPrice = `$${(price / HUNDRED).toFixed(2)}`
  }

  return {
    formattedPrice,
  }
}

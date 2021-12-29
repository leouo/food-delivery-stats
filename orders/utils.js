export const getOrderYear = order => new Date(order?.date).getFullYear()

export const getOrderMonth = order => new Date(order?.date).toLocaleString('pt-BR', { month: 'long' })

export const getOrderValue = order => order?.amount

export const convertOrderValueToCurrency = value => {
  const orderValueWithCents = value / 100
  const currencyConfig = {
    style: 'currency',
    currency: 'BRL',
  }

  return new Intl
    .NumberFormat('pt-BR', currencyConfig)
    .format(orderValueWithCents)
}

export const getOrderYear = order => new Date(order?.createdAt).getFullYear()

export const getOrderMonth = order => new Date(order?.createdAt).toLocaleString('pt-BR', { month: 'long' })

export const getOrderValue = order => order?.payments?.total?.value

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

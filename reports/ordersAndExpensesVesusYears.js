import { convertColumnValuesToCurrency } from './utils.js'
import { getOrderYear, getOrderValue } from '../orders/utils.js'

const ordersVesusYears = {
  Pedidos: {
      total: 0,
  },
  Gastos: {
      total: 0,
  },
}

const setYearsColumns = order => {
  const year = getOrderYear(order)

  ordersVesusYears['Pedidos'][year] = 0
  ordersVesusYears['Gastos'][year] = 0
}

const setColumnsValues = order => {
  const amount = getOrderValue(order)
  const year = getOrderYear(order)

  ordersVesusYears['Pedidos'].total += 1
  ordersVesusYears['Pedidos'][year] += 1
  ordersVesusYears['Gastos'].total += amount
  ordersVesusYears['Gastos'][year] += amount
}

const displayOrdersVesusYears = orders => {
  orders.forEach(setYearsColumns)
  orders.forEach(setColumnsValues)
  
  convertColumnValuesToCurrency(ordersVesusYears, 'Gastos')

  console.info('-- Pedidos & Gastos X Ano --')
  console.table(ordersVesusYears)
}

export default {
  display: displayOrdersVesusYears,
}
import { convertColumnValuesToCurrency } from './utils.js'
import { getOrderYear, getOrderMonth, getOrderValue } from '../orders/utils.js'

const yearVesusMonthsOrders = {}

const setYearAndMonthsColumns = order => {
  const year = getOrderYear(order)
  const month = getOrderMonth(order)

  yearVesusMonthsOrders[month] ||= {} 
  yearVesusMonthsOrders[month][year] = 0
}

const setColumnsValues = order => {
  const year = getOrderYear(order)
  const month = getOrderMonth(order)

  yearVesusMonthsOrders[month][year] += getOrderValue(order)
}

const displayYearVesusMonthsOrders = orders => {
  orders.forEach(setYearAndMonthsColumns)
  orders.forEach(setColumnsValues)

  Object.keys(yearVesusMonthsOrders).forEach(year => {
      convertColumnValuesToCurrency(yearVesusMonthsOrders, year)
  })

  console.info('-- Ano X Mês (Gastos) --')
  console.table(yearVesusMonthsOrders)
}

export default {
  display: displayYearVesusMonthsOrders,
}
import yearsVesusMonths from './yearsVesusMonths.js'
import ordersAndExpensesVesusYears from './ordersAndExpensesVesusYears.js'
import db from '../db/instance.js'

export const getReports = () => {
  const orders = db.data.orders
      .filter(order => order.lastStatus === 'CONCLUDED')

  ordersAndExpensesVesusYears.display(orders)
  yearsVesusMonths.display(orders)
}

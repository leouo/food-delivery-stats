import supportedDeliveryServices from '../services/delivery-services.js'
import yearsVesusMonths from './yearsVesusMonths.js'
import ordersAndExpensesVesusYears from './ordersAndExpensesVesusYears.js'
import db from '../db/instance.js'

export const getReports = (deliveryServices = supportedDeliveryServices) => {
  const orders = deliveryServices.reduce((orders, { name: serviceName }) => {
    const deliveryServiceOrders = db.data.orders[serviceName]
    
    return orders.concat(deliveryServiceOrders.filter(order => order.status === 'COMPLETED'))
  }, [])

  ordersAndExpensesVesusYears.display(orders)
  yearsVesusMonths.display(orders)
}

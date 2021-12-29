import supportedDeliveryServices from '../services/delivery-services.js'
import db from '../db/instance.js'

export const ordersSchema = supportedDeliveryServices.reduce((schema, { name }) => ({
  ...schema,
  [name]: []
}), {})

export const insertOrders = async (orders, { deliveryServiceName, formatter }) => {
  await db.read()

  formatter(orders)
    .forEach(order => {
      db.data.orders[deliveryServiceName].push(order)
    });

  await db.write()
}

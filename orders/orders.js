import supportedDeliveryServices from '../services/delivery-services.js'
import { insertOrders } from './store.js'

const fetchAndPersistsOrders = async ({ fetcher, name: deliveryServiceName, formatter }) => {
  console.info(`Fetching data from ${deliveryServiceName} service...`);
  const orders = await fetcher()
  console.info(`Persisting ${deliveryServiceName} data...`);
  insertOrders(orders, { deliveryServiceName, formatter })
}

export const getOrdersFromDeliveryServices = (deliveryServices = supportedDeliveryServices) => {
  console.info(`Getting data...`)
  deliveryServices.map(fetchAndPersistsOrders)
}

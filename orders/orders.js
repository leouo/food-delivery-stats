import supportedDeliveryServices from '../services/delivery-services.js'
import { insertOrders } from './store.js'

const fetchAndPersistsOrders = async ({ fetcher, name: deliveryServiceName, formatter }) => {
  const orders = await fetcher()
  
  insertOrders(orders, { deliveryServiceName, formatter })
}

export const getOrdersFromDeliveryServices = (deliveryServices = supportedDeliveryServices) => {
  deliveryServices.map(fetchAndPersistsOrders)
}

import axios from 'axios'
import https from 'https'
import { insertOrders } from './store.js'
import config from '../config.js'

const IFOOD_ORDERS_ENDPOINT = `https://marketplace.ifood.com.br/v4/customers/me/orders`

const getIfoodOrdersURL = pageNumber => `${IFOOD_ORDERS_ENDPOINT}?page=${pageNumber}&size=25`

const agent = new https.Agent({  
  rejectUnauthorized: false
})

const fetchOrdersByPage = pageNumber => 
  axios(getIfoodOrdersURL(pageNumber), {
      "headers": {
      "authorization": `Bearer ${config.tokens.ifood}`,
      },
      "method": "GET",
      "httpsAgent": agent
  })

export const getOrdersAndStore = async (pageNumber = 0) => {
  try {    
    const { data: orders } = await fetchOrdersByPage(pageNumber)

    if (orders.length) {
        insertOrders(orders)
        getOrdersAndStore(pageNumber + 1)
    }
  } catch (error) {
    const { statusText, data } = error.response
    
    console.info(`${statusText} => ${data?.message}`)
  }
}

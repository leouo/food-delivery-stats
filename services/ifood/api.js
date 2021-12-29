import axios from 'axios'
import { httpsAgent } from '../../utils/utils.js'
import config from '../../config.js'

const IFOOD_ORDERS_ENDPOINT = `https://marketplace.ifood.com.br/v4/customers/me/orders`

const getIfoodOrdersURL = pageNumber => `${IFOOD_ORDERS_ENDPOINT}?page=${pageNumber}&size=25`

const ifoodOrders = []

const fetchIfoodOrders =  async (pageNumber = 0) => {
  console.log('IFOOD_ORDERS_FETCHER - START')

  try {
    const { data: apiOrders } = await axios(getIfoodOrdersURL(pageNumber), {
      headers: {
      authorization: `Bearer ${config.tokens.ifood}`,
      },
      method: 'GET',
      httpsAgent,
    })

    const hasOrders = Boolean(apiOrders.length)

    if (hasOrders) {
      ifoodOrders.push(...apiOrders)

      await fetchIfoodOrders(pageNumber + 1)
    }
  } catch (error) {
    console.log('IFOOD_ORDERS_FETCHER - ERROR:', error)
  } finally {
      console.log('IFOOD_ORDERS_FETCHER - END')
      return ifoodOrders
  }
}

export default fetchIfoodOrders

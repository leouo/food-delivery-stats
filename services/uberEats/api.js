import axios from 'axios'
import { httpsAgent } from '../../utils/utils.js'
import config from '../../config.js'

const UBEREATS_ORDERS_ENDPOINT = `https://www.ubereats.com/api/getPastOrdersV1`

const uberEatsOrders = []

const fetchUberEatsOrders = async (nextOrderUuiOffset) => {
    console.log('UBEREATS_ORDERS_FETCHER - START')

    try {
        const { data: { data: { ordersMap, orderUuids } } } = await axios(UBEREATS_ORDERS_ENDPOINT, {
            method: 'POST',
            headers: {
                'x-csrf-token': 'x',
                cookie: `sid=${config.tokens.uberEats}`,
            },
            data: {
                lastWorkflowUUID: nextOrderUuiOffset,
            },
            httpsAgent,
        })

        const apiOrders = Object.values(ordersMap)
        const hasOrders = Boolean(apiOrders.length)

        if (hasOrders) {
            const currentOrderUuiOffset = orderUuids.pop()

            uberEatsOrders.push(...apiOrders)

            await fetchUberEatsOrders(currentOrderUuiOffset)
        }
    } catch (error) {
        console.log('UBEREATS_ORDERS', error)
    } finally {
        console.log('UBEREATS_ORDERS_FETCHER - END')
        return uberEatsOrders
    }
}

export default fetchUberEatsOrders

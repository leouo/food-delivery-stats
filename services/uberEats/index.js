import uberEatsOrdersFetcher from './api.js'
import uberEatsOrdersFormatter from './formatter.js'

export default {
    name: 'uberEats',
    formatter: uberEatsOrdersFormatter,
    fetcher: uberEatsOrdersFetcher,
}

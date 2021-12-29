import ifoodOrdersFetcher from './api.js'
import ifoodOrdersFormatter from './formatter.js'

export default {
    name: 'ifood',
    formatter: ifoodOrdersFormatter,
    fetcher: ifoodOrdersFetcher,
}

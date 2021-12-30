import uberTripsFetcher from './api.js'
import uberTripsFormatter from './formatter.js'

export default {
    name: 'uber',
    formatter: uberTripsFormatter,
    fetcher: uberTripsFetcher,
}

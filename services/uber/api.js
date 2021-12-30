import axios from 'axios'
import { httpsAgent } from '../../utils/utils.js'
import config from '../../config.js'

const UBER_TRIPS_ENDPOINT = `https://riders.uber.com/api/getTripsForClient`

const uberTrips = []

const fetchUberTrips = async (nextCursorOffset = 0) => {
    try {
        const { data: { data: { trips: { trips: apiTrips , pagingResult } } } } = await axios(UBER_TRIPS_ENDPOINT, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'x-csrf-token': config.tokens.uber.xCsrfToken,
                cookie: config.tokens.uber.token,
            },
            data: {
                limit: 50,
                offset: `${nextCursorOffset}`,
                range: {
                    fromTime: null,
                    toTime: null,
                },
                tenancy: 'uber/production'
            },
            httpsAgent,
        })

        const hasTrips = Boolean(apiTrips.length)

        if (hasTrips) uberTrips.push(...apiTrips)
        if (pagingResult.hasMore) await fetchUberTrips(pagingResult.nextCursor)
    } catch (error) {
        console.log('UBER_TRIPS_FETCHER - ERROR', error)
    } finally {
        return uberTrips
    }
}

export default fetchUberTrips

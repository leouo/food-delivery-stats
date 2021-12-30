const getTripStatus = status => status === 'COMPLETED' ? 'COMPLETED' : 'CANCELED'

export default trips => trips.map(({ uuid, clientFare, requestTime, status }) => ({
    id: uuid,
    amount: clientFare,
    date: requestTime,
    status: getTripStatus(status),
    store: '',
}))

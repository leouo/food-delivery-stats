const getOrderDate = orderStateChanges => {
    const { stateChangeTime } = Object.values(orderStateChanges).find(({ type }) => type === 'CREATED')

    return stateChangeTime
}

const getOrderStatus = orderStateChanges => {
    const isCompleted = Object.values(orderStateChanges).some(({ type }) => type === 'COMPLETED')

    return isCompleted ? 'COMPLETED' : 'CANCELED'
}

export default orders => orders.map(({ baseEaterOrder, fareInfo, storeInfo }) => {
    const date = getOrderDate(baseEaterOrder.orderStateChanges)
    const status = getOrderStatus(baseEaterOrder.orderStateChanges)

    return ({
        id: baseEaterOrder.uuid,
        amount: fareInfo.totalPrice,
        date,
        status,
        store: storeInfo.title,
    })
})

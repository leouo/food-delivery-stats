const getOrderStatus = lastStatus => lastStatus === 'CONCLUDED' ? 'COMPLETED' : 'CANCELED'

export default orders => orders.map(({ id, createdAt, payments, lastStatus, merchant}) => {
    const status = getOrderStatus(lastStatus)

    return ({
        id,
        amount: payments.total.value,
        date: createdAt,
        status,
        store: merchant.name,
    })
})

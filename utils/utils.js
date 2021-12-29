import https from 'https'
import supportedDeliveryServices from '../services/delivery-services.js'

export const httpsAgent = new https.Agent({  
    rejectUnauthorized: false
})

export const getDeliveryServices = (deliveryServices) => {
    if (deliveryServices === undefined) return

    return supportedDeliveryServices.filter(({ name: supportedDeliveryServiceName }) => {
        return deliveryServices.some(deliveryServiceName => deliveryServiceName === supportedDeliveryServiceName)
    })
}

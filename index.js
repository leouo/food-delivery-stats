import { Command, Option } from 'commander'
import { argv } from 'process'
import { getDeliveryServices } from './utils/utils.js'
import { getOrdersFromDeliveryServices } from './orders/orders.js'
import { getReports } from './reports/reports.js'

const program = new Command()

program
  .option('-f, --fetch-data', 'fetches food delivery data')
  .option('-r, --display-reports', 'show your delivery stats reports')
  .option('-s, --delivery-services <names...>', 'defines which services should fetch and display statistics')
    
program.parse(argv)

const options = program.opts()

const deliveryServices = getDeliveryServices(options.deliveryServices)

if (options.fetchData) getOrdersFromDeliveryServices(deliveryServices)
if (options.displayReports) getReports(deliveryServices)

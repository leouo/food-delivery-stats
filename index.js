import { Command, Option } from 'commander'
import { argv } from 'process'
import { getOrdersAndStore } from './orders/api.js'
import { getReports } from './reports/reports.js'

const program = new Command()

program
  .option('-f, --fetch-data', 'fetches food delivery data')
  .option('-r, --display-reports', 'show your delivery stats reports')
    
program.parse(argv)

const options = program.opts()

if (options.fetchData) getOrdersAndStore()
if (options.displayReports) getReports()

import { convertOrderValueToCurrency } from '../orders/utils.js'

export const convertColumnValuesToCurrency = (data, column) => {
  for (var [columnName, columnValue] of Object.entries(data[column])) {
      data[column][columnName] = convertOrderValueToCurrency(columnValue)
  }
}

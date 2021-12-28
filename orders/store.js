import db from '../db/instance.js'

export const insertOrders = async orders => {
  await db.read()

  orders.forEach(order => {
      db.data.orders.push(order)
  });

  db.write()
}

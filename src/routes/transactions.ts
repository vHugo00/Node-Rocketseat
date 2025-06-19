import { FastifyInstance } from 'fastify'
import { knex } from '../database'

export async function transactionsRoutes(app: FastifyInstance) {
  app.get('/hello', async () => {
    const transactions = await knex('transactions')
      .where('id', '4c890b64-9e22-43f5-94e4-80ef036a4930')
      .select('*')
    return transactions
  })
}

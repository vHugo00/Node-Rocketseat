import { expect, test } from 'vitest'

test('O usuario consegue criar uma nova transação', () => {
  // Fazer a chamada HTTP para criar uma nova transação

  const responseStatusCode = 201

  expect(responseStatusCode).toEqual(201)
})

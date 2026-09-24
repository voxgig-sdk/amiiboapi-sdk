
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { AmiiboapiSDK } from '..'


describe('exists', async () => {

  test('test-mode', () => {
    const testsdk = AmiiboapiSDK.test()
    equal(testsdk instanceof AmiiboapiSDK, true,
      'AmiiboapiSDK.test() must return a client synchronously')
  })

})

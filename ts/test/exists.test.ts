
import { test, describe } from 'node:test'
import { equal } from 'node:assert'


import { AmiiboapiSDK } from '..'


describe('exists', async () => {

  test('test-mode', async () => {
    const testsdk = await AmiiboapiSDK.test()
    equal(null !== testsdk, true)
  })

})

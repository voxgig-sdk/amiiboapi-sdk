

import Path from 'node:path'
import * as Fs from 'node:fs'

import { test, describe, afterEach } from 'node:test'
import assert from 'node:assert'
import { createLiveTransport } from '../../live-runner'
import { runLiveEntity } from '../../live-entity'


import { AmiiboapiSDK, BaseFeature, stdutil } from '../../..'

import {
  envOverride,
  liveClientOptions,
  liveDelay,
  loadEnvLocal,
  makeCtrl,
  makeMatch,
  makeReqdata,
  makeStepData,
  makeValid,
  maybeSkipControl,
} from '../../utility'


loadEnvLocal(__dirname + '/../../../.env.local')


describe('AmiiboseriesEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AMIIBOAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('AMIIBOAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = AmiiboapiSDK.test()
    const ent = testsdk.Amiiboseries()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AMIIBOAPI_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'amiiboseries.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"key":{"a":true,"h":"Key","n":"key","r":false,"sh":"Unique key for the amiibo series","t":"`$STRING`","key$":"key","index$":0},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"Name of the amiibo series","t":"`$STRING`","key$":"name","index$":1}},"name":"amiiboseries","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /amiiboseries","source":"openapi3","version":2},"g":{},"k":"http","m":"GET","o":"/amiiboseries","q":{},"r":{},"s":[{"lit":"amiiboseries"}],"t":{"req":"`reqdata`","res":"`body.amiibo`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"amiiboseries","name__orig":"amiiboseries","Name":"Amiiboseries","name_":"amiiboseries","name-":"amiiboseries","NAME":"AMIIBOSERIES","index$":1}, {"active":true,"entity":"amiiboseries","key$":"BasicAmiiboseriesFlow","kind":"basic","name":"BasicAmiiboseriesFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"amiiboseries_ref01"}}],"index$":0}]}, 'Amiiboseries', {"GET /amiiboseries":{"protocol":"http","operationId":"getAmiiboSeries","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"amiibo":{"items":{"properties":{"key":{"description":"Unique key for the amiibo series","type":"string","key$":"key"},"name":{"description":"Name of the amiibo series","type":"string","key$":"name"}},"type":"object","index$":0},"key$":"amiibo","type":"array"}}}}}}},"parameters":[],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let amiiboseries_ref01_data = Object.values(setup.data.existing.amiiboseries)[0] as any

    // LIST
    const amiiboseries_ref01_ent = client.Amiiboseries()
    const amiiboseries_ref01_match: any = {}

    const amiiboseries_ref01_list = (await amiiboseries_ref01_ent.list(amiiboseries_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/amiiboseries/AmiiboseriesTestData.json')

  // TODO: file ready util needed?
  const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8')

  // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
  const entityData = JSON.parse(entityDataSource)

  options.entity = entityData.existing

  let client = AmiiboapiSDK.test(options, extra)
  const struct = client.utility().struct
  const merge = struct.merge
  const transform = struct.transform

  let idmap = transform(
    ['amiiboseries01','amiiboseries02','amiiboseries03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AMIIBOAPI_TEST_AMIIBOSERIES_ENTID': idmap,
    'AMIIBOAPI_TEST_LIVE': 'FALSE',
    'AMIIBOAPI_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['AMIIBOAPI_TEST_AMIIBOSERIES_ENTID']

  const live = 'TRUE' === env.AMIIBOAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AMIIBOAPI_TEST_AMIIBOSERIES_ENTID']
    idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {}
    if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
      throw new Error('Live ENTID must be a JSON object')
    }
    client = new AmiiboapiSDK(merge([
      // FIRST, so the generated fields below win: sdk-test-control.json's
      // test.client.options adds to the live client, it does not redirect it.
      liveClientOptions(),
      {
      },
      // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
      // last entry is undefined, and basicSetup is normally called with no
      // argument at all - so a bare 'extra' silently discarded the apikey
      // and server values above and handed the SDK undefined. Harmless
      // while there was nothing in that object; not harmless now.
      extra || {},
      { system: { fetch: transport.fetch } }
    ]))
  }

  const setup = {
    idmap,
    env,
    options,
    client,
    struct,
    data: entityData,
    explain: 'TRUE' === env.AMIIBOAPI_TEST_EXPLAIN,
    live,
    transport,
    now: Date.now(),
  }

  return setup
}
  



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


describe('AmiiboEntity', async () => {

  // Per-test live pacing. Delay is read from sdk-test-control.json's
  // `test.live.delayMs`; only sleeps when AMIIBOAPI_TEST_LIVE=TRUE.
  afterEach(liveDelay('AMIIBOAPI_TEST_LIVE'))

  test('instance', async () => {
    const testsdk = AmiiboapiSDK.test()
    const ent = testsdk.Amiibo()
    assert(null != ent)
  })


  test('basic', async (t) => {

    const live = 'TRUE' === process.env.AMIIBOAPI_TEST_LIVE
    for (const op of ['list']) {
      if (!live && maybeSkipControl(t, 'entityOp', 'amiibo.' + op, live)) return
    }

    
    const setup = basicSetup()
    if (setup.live) {
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":{"amiiboSeries":{"a":true,"h":"Amiibo Series","n":"amiiboSeries","r":false,"sh":"The amiibo series the amiibo belongs to","t":"`$STRING`","key$":"amiiboSeries","index$":0},"character":{"a":true,"h":"Character","n":"character","r":false,"sh":"The character of the amiibo","t":"`$STRING`","key$":"character","index$":1},"gameSeries":{"a":true,"h":"Game Series","n":"gameSeries","r":false,"sh":"The game series the amiibo is from","t":"`$STRING`","key$":"gameSeries","index$":2},"head":{"a":true,"h":"Head","n":"head","r":false,"sh":"The head hex value of the amiibo","t":"`$STRING`","key$":"head","index$":3},"image":{"a":true,"fo":"uri","h":"Image","n":"image","r":false,"sh":"URL to the amiibo image","t":"`$STRING`","key$":"image","index$":4},"name":{"a":true,"h":"Name","n":"name","r":false,"sh":"The name of the amiibo","t":"`$STRING`","key$":"name","index$":5},"release":{"a":true,"h":"Release","n":"release","r":false,"t":"`$OBJECT`","key$":"release","index$":6},"tail":{"a":true,"h":"Tail","n":"tail","r":false,"sh":"The tail hex value of the amiibo","t":"`$STRING`","key$":"tail","index$":7},"type":{"a":true,"h":"Type","n":"type","r":false,"sh":"The type of amiibo (e.g., Figure, Card)","t":"`$STRING`","key$":"type","index$":8}},"name":"amiibo","op":{"list":{"input":"data","name":"list","points":[{"a":true,"co":{"id":"GET /amiibo","source":"openapi3","version":2},"g":{"query":[{"a":true,"k":"query","n":"amiibo_series","or":"amiibo_series","r":false,"t":"`$STRING`","index$":0},{"a":true,"k":"query","n":"character","or":"character","r":false,"t":"`$STRING`","index$":1},{"a":true,"k":"query","n":"game_series","or":"game_series","r":false,"t":"`$STRING`","index$":2},{"a":true,"k":"query","n":"head","or":"head","r":false,"t":"`$STRING`","index$":3},{"a":true,"k":"query","n":"name","or":"name","r":false,"t":"`$STRING`","index$":4},{"a":true,"k":"query","n":"showusage","or":"showusage","r":false,"t":"`$BOOLEAN`","index$":5},{"a":true,"k":"query","n":"tail","or":"tail","r":false,"t":"`$STRING`","index$":6},{"a":true,"k":"query","n":"type","or":"type","r":false,"t":"`$STRING`","index$":7}]},"k":"http","m":"GET","o":"/amiibo","q":{"exist":["amiibo_series","character","game_series","head","name","showusage","tail","type"]},"r":{},"s":[{"lit":"amiibo"}],"t":{"req":"`reqdata`","res":"`body.amiibo`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"amiibo","name__orig":"amiibo","Name":"Amiibo","name_":"amiibo","name-":"amiibo","NAME":"AMIIBO","index$":0}, {"active":true,"entity":"amiibo","key$":"BasicAmiiboFlow","kind":"basic","name":"BasicAmiiboFlow","param":{},"step":[{"a":true,"d":{},"i":{},"m":{},"o":"list","s":[],"v":[{"apply":"ItemExists","def":{"ref":"amiibo_ref01"}}],"index$":0}]}, 'Amiibo', {"GET /amiibo":{"protocol":"http","operationId":"getAmiibo","responses":{"200":{"description":"Successful response","content":{"application/json":{"schema":{"type":"object","properties":{"amiibo":{"items":{"properties":{"amiiboSeries":{"description":"The amiibo series the amiibo belongs to","type":"string","key$":"amiiboSeries"},"character":{"description":"The character of the amiibo","type":"string","key$":"character"},"gameSeries":{"description":"The game series the amiibo is from","type":"string","key$":"gameSeries"},"head":{"description":"The head hex value of the amiibo","type":"string","key$":"head"},"image":{"description":"URL to the amiibo image","format":"uri","type":"string","key$":"image"},"name":{"description":"The name of the amiibo","type":"string","key$":"name"},"release":{"properties":{"au":{"description":"Release date in Australia","format":"date","type":"string"},"eu":{"description":"Release date in Europe","format":"date","type":"string"},"jp":{"description":"Release date in Japan","format":"date","type":"string"},"na":{"description":"Release date in North America","format":"date","type":"string"}},"type":"object","key$":"release"},"tail":{"description":"The tail hex value of the amiibo","type":"string","key$":"tail"},"type":{"description":"The type of amiibo (e.g., Figure, Card)","type":"string","key$":"type"}},"type":"object","index$":0},"key$":"amiibo","type":"array"}}}}}},"404":{"description":"No amiibos found","content":{"application/json":{"schema":{"type":"object","properties":{"error":{"type":"string","example":"No amiibos found"}}}}}}},"parameters":[{"name":"name","in":"query","description":"Filter by amiibo name","required":false,"schema":{"type":"string"},"index$":0},{"name":"head","in":"query","description":"Filter by amiibo head hex value","required":false,"schema":{"type":"string"},"index$":1},{"name":"tail","in":"query","description":"Filter by amiibo tail hex value","required":false,"schema":{"type":"string"},"index$":2},{"name":"type","in":"query","description":"Filter by amiibo type (e.g., Figure, Card, Yarn)","required":false,"schema":{"type":"string"},"index$":3},{"name":"character","in":"query","description":"Filter by character name","required":false,"schema":{"type":"string"},"index$":4},{"name":"gameSeries","in":"query","description":"Filter by game series","required":false,"schema":{"type":"string"},"index$":5},{"name":"amiiboSeries","in":"query","description":"Filter by amiibo series","required":false,"schema":{"type":"string"},"index$":6},{"name":"showusage","in":"query","description":"Show game usage information","required":false,"schema":{"type":"boolean"},"index$":7}],"securitySource":"unspecified"}})
    }
    const client = setup.client
    const struct = setup.struct

    const isempty = struct.isempty
    const select = struct.select

    let amiibo_ref01_data = Object.values(setup.data.existing.amiibo)[0] as any

    // LIST
    const amiibo_ref01_ent = client.Amiibo()
    const amiibo_ref01_match: any = {}

    const amiibo_ref01_list = (await amiibo_ref01_ent.list(amiibo_ref01_match)).map((e: any) => e.data())


  })
})



function basicSetup(extra?: any) {
  // TODO: fix test def options
  const options: any = {} // null

  // TODO: needs test utility to resolve path
  const entityDataFile =
    Path.resolve(__dirname, 
      '../../../../.sdk/test/entity/amiibo/AmiiboTestData.json')

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
    ['amiibo01','amiibo02','amiibo03'],
    {
      '`$PACK`': ['', {
        '`$KEY`': '`$COPY`',
        '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
      }]
    })

  const env = envOverride({
    'AMIIBOAPI_TEST_AMIIBO_ENTID': idmap,
    'AMIIBOAPI_TEST_LIVE': 'FALSE',
    'AMIIBOAPI_TEST_EXPLAIN': 'FALSE',
  })

  idmap = env['AMIIBOAPI_TEST_AMIIBO_ENTID']

  const live = 'TRUE' === env.AMIIBOAPI_TEST_LIVE

  const transport = createLiveTransport()
  if (live) {
    const rawIds = process.env['AMIIBOAPI_TEST_AMIIBO_ENTID']
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
  

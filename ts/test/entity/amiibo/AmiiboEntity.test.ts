

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


// AFTER the imports on purpose: TypeScript hoists `import` above any
// statement in the emitted CommonJS, so a loader placed above them would
// run only after every imported module had already been evaluated - and
// anything reading process.env at module scope would miss these values.
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
      return runLiveEntity(setup, {"active":true,"alias":{"field":{}},"fields":[{"active":true,"name":"amiiboSeries","req":false,"short":"The amiibo series the amiibo belongs to","type":"`$STRING`","index$":0},{"active":true,"name":"character","req":false,"short":"The character of the amiibo","type":"`$STRING`","index$":1},{"active":true,"name":"gameSeries","req":false,"short":"The game series the amiibo is from","type":"`$STRING`","index$":2},{"active":true,"name":"head","req":false,"short":"The head hex value of the amiibo","type":"`$STRING`","index$":3},{"active":true,"format":"uri","name":"image","req":false,"short":"URL to the amiibo image","type":"`$STRING`","index$":4},{"active":true,"name":"name","req":false,"short":"The name of the amiibo","type":"`$STRING`","index$":5},{"active":true,"name":"release","req":false,"type":"`$OBJECT`","index$":6},{"active":true,"name":"tail","req":false,"short":"The tail hex value of the amiibo","type":"`$STRING`","index$":7},{"active":true,"name":"type","req":false,"short":"The type of amiibo (e.g., Figure, Card)","type":"`$STRING`","index$":8}],"name":"amiibo","op":{"list":{"input":"data","name":"list","points":[{"active":true,"args":{"query":[{"active":true,"kind":"query","name":"amiibo_series","orig":"amiibo_series","reqd":false,"type":"`$STRING`","index$":0},{"active":true,"kind":"query","name":"character","orig":"character","reqd":false,"type":"`$STRING`","index$":1},{"active":true,"kind":"query","name":"game_series","orig":"game_series","reqd":false,"type":"`$STRING`","index$":2},{"active":true,"kind":"query","name":"head","orig":"head","reqd":false,"type":"`$STRING`","index$":3},{"active":true,"kind":"query","name":"name","orig":"name","reqd":false,"type":"`$STRING`","index$":4},{"active":true,"kind":"query","name":"showusage","orig":"showusage","reqd":false,"type":"`$BOOLEAN`","index$":5},{"active":true,"kind":"query","name":"tail","orig":"tail","reqd":false,"type":"`$STRING`","index$":6},{"active":true,"kind":"query","name":"type","orig":"type","reqd":false,"type":"`$STRING`","index$":7}]},"contract":{"id":"GET /amiibo","json":"{\"operationId\":\"getAmiibo\",\"parameters\":[{\"description\":\"Filter by amiibo name\",\"in\":\"query\",\"name\":\"name\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by amiibo head hex value\",\"in\":\"query\",\"name\":\"head\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by amiibo tail hex value\",\"in\":\"query\",\"name\":\"tail\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by amiibo type (e.g., Figure, Card, Yarn)\",\"in\":\"query\",\"name\":\"type\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by character name\",\"in\":\"query\",\"name\":\"character\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by game series\",\"in\":\"query\",\"name\":\"gameSeries\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Filter by amiibo series\",\"in\":\"query\",\"name\":\"amiiboSeries\",\"required\":false,\"schema\":{\"type\":\"string\"}},{\"description\":\"Show game usage information\",\"in\":\"query\",\"name\":\"showusage\",\"required\":false,\"schema\":{\"type\":\"boolean\"}}],\"protocol\":\"http\",\"responses\":{\"200\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"amiibo\":{\"items\":{\"properties\":{\"amiiboSeries\":{\"description\":\"The amiibo series the amiibo belongs to\",\"type\":\"string\"},\"character\":{\"description\":\"The character of the amiibo\",\"type\":\"string\"},\"gameSeries\":{\"description\":\"The game series the amiibo is from\",\"type\":\"string\"},\"head\":{\"description\":\"The head hex value of the amiibo\",\"type\":\"string\"},\"image\":{\"description\":\"URL to the amiibo image\",\"format\":\"uri\",\"type\":\"string\"},\"name\":{\"description\":\"The name of the amiibo\",\"type\":\"string\"},\"release\":{\"properties\":{\"au\":{\"description\":\"Release date in Australia\",\"format\":\"date\",\"type\":\"string\"},\"eu\":{\"description\":\"Release date in Europe\",\"format\":\"date\",\"type\":\"string\"},\"jp\":{\"description\":\"Release date in Japan\",\"format\":\"date\",\"type\":\"string\"},\"na\":{\"description\":\"Release date in North America\",\"format\":\"date\",\"type\":\"string\"}},\"type\":\"object\"},\"tail\":{\"description\":\"The tail hex value of the amiibo\",\"type\":\"string\"},\"type\":{\"description\":\"The type of amiibo (e.g., Figure, Card)\",\"type\":\"string\"}},\"type\":\"object\"},\"type\":\"array\"}},\"type\":\"object\"}}},\"description\":\"Successful response\"},\"404\":{\"content\":{\"application/json\":{\"schema\":{\"properties\":{\"error\":{\"example\":\"No amiibos found\",\"type\":\"string\"}},\"type\":\"object\"}}},\"description\":\"No amiibos found\"}},\"securitySource\":\"unspecified\"}","source":"openapi3","version":1},"kind":"http","method":"GET","orig":"/amiibo","segments":[{"lit":"amiibo"}],"select":{"exist":["amiibo_series","character","game_series","head","name","showusage","tail","type"]},"transform":{"req":"`reqdata`","res":"`body.amiibo`"},"index$":0}],"key$":"list"}},"relations":{"ancestors":[]},"key$":"amiibo","name__orig":"amiibo","Name":"Amiibo","name_":"amiibo","name-":"amiibo","NAME":"AMIIBO","index$":0}, {"active":true,"entity":"amiibo","key$":"BasicAmiiboFlow","kind":"basic","name":"BasicAmiiboFlow","param":{},"step":[{"active":true,"data":{},"input":{},"match":{},"op":"list","spec":[],"valid":[{"apply":"ItemExists","def":{"ref":"amiibo_ref01"}}],"index$":0}]}, 'Amiibo')
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
  

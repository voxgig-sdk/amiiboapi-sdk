import { describe, test } from 'node:test'
import { SDK } from '..'
import { runDefinitionPoint } from './definition-runner'
import { isControlSkipped } from './utility'


// Generated from the API definition, not from the model this SDK was built
// from: the route, the declared query parameters, the credential the security
// scheme names, and the definition's own response example.
const PLAN: any[] = [
  {
    "entity": "amiibo",
    "accessor": "Amiibo",
    "op": "list",
    "method": "GET",
    "path": "/amiibo",
    "args": [],
    "select": {
      "amiibo_series": "v1",
      "character": "v1",
      "game_series": "v1",
      "head": "v1",
      "name": "v1",
      "showusage": "v1",
      "tail": "v1",
      "type": "v1"
    },
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [
      "name",
      "head",
      "tail",
      "type",
      "character",
      "gameSeries",
      "amiiboSeries",
      "showusage"
    ],
    "queryArgs": [
      {
        "name": "amiibo_series",
        "wire": "amiiboSeries"
      },
      {
        "name": "character",
        "wire": "character"
      },
      {
        "name": "game_series",
        "wire": "gameSeries"
      },
      {
        "name": "head",
        "wire": "head"
      },
      {
        "name": "name",
        "wire": "name"
      },
      {
        "name": "showusage",
        "wire": "showusage"
      },
      {
        "name": "tail",
        "wire": "tail"
      },
      {
        "name": "type",
        "wire": "type"
      }
    ],
    "auth": null,
    "status": 200,
    "sample": {
      "amiibo": [
        {
          "amiiboSeries": "x",
          "character": "x",
          "gameSeries": "x",
          "head": "x",
          "tail": "x",
          "image": "x",
          "name": "x",
          "release": {
            "au": "2026-01-01",
            "eu": "2026-01-01",
            "jp": "2026-01-01",
            "na": "2026-01-01"
          },
          "type": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "amiiboseries",
    "accessor": "Amiiboseries",
    "op": "list",
    "method": "GET",
    "path": "/amiiboseries",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "amiibo": [
        {
          "key": "x",
          "name": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "character",
    "accessor": "Character",
    "op": "list",
    "method": "GET",
    "path": "/character",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "amiibo": [
        {
          "key": "x",
          "name": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "gameseries",
    "accessor": "Gameseries",
    "op": "list",
    "method": "GET",
    "path": "/gameseries",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "amiibo": [
        {
          "key": "x",
          "name": "x"
        }
      ]
    },
    "idField": "id"
  },
  {
    "entity": "type",
    "accessor": "Type",
    "op": "list",
    "method": "GET",
    "path": "/type",
    "args": [],
    "select": {},
    "headers": [],
    "cookies": [],
    "responseMedia": [
      "application/json"
    ],
    "query": [],
    "queryArgs": [],
    "auth": null,
    "status": 200,
    "sample": {
      "amiibo": [
        {
          "key": "x",
          "name": "x"
        }
      ]
    },
    "idField": "id"
  }
]


describe('definition', () => {
  for (const point of PLAN) {
    test(point.entity + '.' + point.op + ' ' + point.method + ' ' + point.path, async (t) => {
      const control = isControlSkipped('entityOp', point.entity + '.' + point.op, 'definition')
      if (control.skip) {
        t.skip(control.reason || 'skipped via sdk-test-control.json')
        return
      }
      await runDefinitionPoint(SDK, point)
    })
  }
})

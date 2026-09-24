
import { BaseFeature } from './feature/base/BaseFeature'
import { RatelimitFeature } from './feature/ratelimit/RatelimitFeature'
import { RetryFeature } from './feature/retry/RetryFeature'
import { TestFeature } from './feature/test/TestFeature'
import { TimeoutFeature } from './feature/timeout/TimeoutFeature'



const FEATURE_CLASS: Record<string, typeof BaseFeature> = {
   ratelimit: RatelimitFeature,
 retry: RetryFeature,
 test: TestFeature,
 timeout: TimeoutFeature,

}


const FEATURE_PLUGINS: Record<string, any[]> = {
  
}


class Config {

  makeFeature(this: any, fn: string) {
    const fc = FEATURE_CLASS[fn]
    const fi = new fc()
    return fi
  }

  // False for a feature added at runtime via options.extend (station's
  // adopt path) - the constructor uses this to skip makeFeature for names
  // no generated class backs.
  hasFeature(this: any, fn: string) {
    return null != FEATURE_CLASS[fn]
  }


  main = {
    name: 'Amiiboapi',
        slug: "amiiboapi",
    version: "0.0.1",
    target: "ts",

  }


  feature = {
     ratelimit:     {
      "options": {
        "active": false,
        "burst": 5,
        "rate": 5
      },
      "optspec": {
        "now": "`$FUNCTION`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 retry:     {
      "options": {
        "active": false,
        "factor": 2,
        "maxDelay": 2000,
        "minDelay": 50,
        "retries": 2,
        "statuses": [
          408,
          425,
          429,
          500,
          502,
          503,
          504
        ]
      },
      "optspec": {
        "jitter": "`$BOOLEAN`",
        "sleep": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },
 test:     {
      "options": {
        "active": false
      },
      "optspec": {
        "entity": "`$MAP`",
        "net": "`$MAP`"
      },
      "strict": false,
      "transport": "base"
    },
 timeout:     {
      "options": {
        "active": false,
        "ms": 30000
      },
      "optspec": {
        "clearTimer": "`$FUNCTION`",
        "setTimer": "`$FUNCTION`"
      },
      "strict": false,
      "transport": "wrap"
    },

  }


  options = {
    base: "https://www.amiiboapi.com/api",

    headers: {
      "content-type": "application/json"
    },

    entity: {
      
        amiibo: {
        },
  
        amiiboseries: {
        },
  
        character: {
        },
  
        gameseries: {
        },
  
        type: {
        },
  
    }
  }


  entity = {
    "amiibo": {
      "fields": [
        {
          "name": "amiiboSeries",
          "title": "Amiibo Series",
          "type": "`$STRING`",
          "short": "The amiibo series the amiibo belongs to"
        },
        {
          "name": "character",
          "title": "Character",
          "type": "`$STRING`",
          "short": "The character of the amiibo"
        },
        {
          "name": "gameSeries",
          "title": "Game Series",
          "type": "`$STRING`",
          "short": "The game series the amiibo is from"
        },
        {
          "name": "head",
          "title": "Head",
          "type": "`$STRING`",
          "short": "The head hex value of the amiibo"
        },
        {
          "name": "image",
          "title": "Image",
          "type": "`$STRING`",
          "short": "URL to the amiibo image",
          "format": "uri"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "The name of the amiibo"
        },
        {
          "name": "release",
          "title": "Release",
          "type": "`$OBJECT`"
        },
        {
          "name": "tail",
          "title": "Tail",
          "type": "`$STRING`",
          "short": "The tail hex value of the amiibo"
        },
        {
          "name": "type",
          "title": "Type",
          "type": "`$STRING`",
          "short": "The type of amiibo (e.g., Figure, Card)"
        }
      ],
      "name": "amiibo",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/amiibo",
              "segments": [
                {
                  "lit": "amiibo"
                }
              ],
              "parts": [
                "amiibo"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.amiibo`"
              },
              "args": {
                "query": [
                  {
                    "name": "amiibo_series",
                    "orig": "amiibo_series",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "character",
                    "orig": "character",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "game_series",
                    "orig": "game_series",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "head",
                    "orig": "head",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "name",
                    "orig": "name",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "showusage",
                    "orig": "showusage",
                    "type": "`$BOOLEAN`",
                    "kind": "query"
                  },
                  {
                    "name": "tail",
                    "orig": "tail",
                    "type": "`$STRING`",
                    "kind": "query"
                  },
                  {
                    "name": "type",
                    "orig": "type",
                    "type": "`$STRING`",
                    "kind": "query"
                  }
                ]
              },
              "select": {
                "exist": [
                  "amiibo_series",
                  "character",
                  "game_series",
                  "head",
                  "name",
                  "showusage",
                  "tail",
                  "type"
                ]
              }
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "amiiboseries": {
      "fields": [
        {
          "name": "key",
          "title": "Key",
          "type": "`$STRING`",
          "short": "Unique key for the amiibo series"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name of the amiibo series"
        }
      ],
      "name": "amiiboseries",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/amiiboseries",
              "segments": [
                {
                  "lit": "amiiboseries"
                }
              ],
              "parts": [
                "amiiboseries"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.amiibo`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "character": {
      "fields": [
        {
          "name": "key",
          "title": "Key",
          "type": "`$STRING`",
          "short": "Unique key for the character"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name of the character"
        }
      ],
      "name": "character",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/character",
              "segments": [
                {
                  "lit": "character"
                }
              ],
              "parts": [
                "character"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.amiibo`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "gameseries": {
      "fields": [
        {
          "name": "key",
          "title": "Key",
          "type": "`$STRING`",
          "short": "Unique key for the game series"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name of the game series"
        }
      ],
      "name": "gameseries",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/gameseries",
              "segments": [
                {
                  "lit": "gameseries"
                }
              ],
              "parts": [
                "gameseries"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.amiibo`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    },
    "type": {
      "fields": [
        {
          "name": "key",
          "title": "Key",
          "type": "`$STRING`",
          "short": "Unique key for the amiibo type"
        },
        {
          "name": "name",
          "title": "Name",
          "type": "`$STRING`",
          "short": "Name of the amiibo type"
        }
      ],
      "name": "type",
      "op": {
        "list": {
          "input": "data",
          "name": "list",
          "points": [
            {
              "kind": "http",
              "method": "GET",
              "orig": "/type",
              "segments": [
                {
                  "lit": "type"
                }
              ],
              "parts": [
                "type"
              ],
              "rename": {},
              "transform": {
                "req": "`reqdata`",
                "res": "`body.amiibo`"
              },
              "args": {},
              "select": {}
            }
          ]
        }
      },
      "relations": {
        "ancestors": []
      }
    }
  }
}


const config = new Config()

export {
  config,
  FEATURE_PLUGINS,
}


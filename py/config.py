# Amiiboapi SDK configuration


def make_config():
    return {
        "main": {
            "name": "Amiiboapi",
        },
        "feature": {
            "test": {
        "options": {
          "active": False,
        },
      },
        },
        "options": {
            "base": "https://www.amiiboapi.com/api",
            "auth": {
                "prefix": "Bearer",
            },
            "headers": {
        "content-type": "application/json",
      },
            "entity": {
                "amiibo": {},
                "amiiboseries": {},
                "character": {},
                "gameseries": {},
                "type": {},
            },
        },
        "entity": {
      "amiibo": {
        "fields": [
          {
            "name": "amiibo_series",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "character",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
          {
            "name": "game_series",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 2,
          },
          {
            "name": "head",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 3,
          },
          {
            "name": "image",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 4,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 5,
          },
          {
            "name": "release",
            "req": False,
            "type": "`$OBJECT`",
            "active": True,
            "index$": 6,
          },
          {
            "name": "tail",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 7,
          },
          {
            "name": "type",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 8,
          },
        ],
        "name": "amiibo",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "amiibo_series",
                      "orig": "amiibo_series",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "character",
                      "orig": "character",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "game_series",
                      "orig": "game_series",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "head",
                      "orig": "head",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "showusage",
                      "orig": "showusage",
                      "reqd": False,
                      "type": "`$BOOLEAN`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "tail",
                      "orig": "tail",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "reqd": False,
                      "type": "`$STRING`",
                      "active": True,
                    },
                  ],
                },
                "method": "GET",
                "orig": "/amiibo",
                "parts": [
                  "amiibo",
                ],
                "select": {
                  "exist": [
                    "amiibo_series",
                    "character",
                    "game_series",
                    "head",
                    "name",
                    "showusage",
                    "tail",
                    "type",
                  ],
                },
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "amiiboseries": {
        "fields": [
          {
            "name": "key",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
        ],
        "name": "amiiboseries",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/amiiboseries",
                "parts": [
                  "amiiboseries",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "character": {
        "fields": [
          {
            "name": "key",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
        ],
        "name": "character",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/character",
                "parts": [
                  "character",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "gameseries": {
        "fields": [
          {
            "name": "key",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
        ],
        "name": "gameseries",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/gameseries",
                "parts": [
                  "gameseries",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
      "type": {
        "fields": [
          {
            "name": "key",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 0,
          },
          {
            "name": "name",
            "req": False,
            "type": "`$STRING`",
            "active": True,
            "index$": 1,
          },
        ],
        "name": "type",
        "op": {
          "list": {
            "name": "list",
            "points": [
              {
                "method": "GET",
                "orig": "/type",
                "parts": [
                  "type",
                ],
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body`",
                },
                "active": True,
                "args": {},
                "select": {},
                "index$": 0,
              },
            ],
            "input": "data",
            "key$": "list",
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }

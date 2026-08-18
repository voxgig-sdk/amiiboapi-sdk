# Amiiboapi SDK configuration


_shared_config = None


def shared_config():
    """Return the process-wide config, built once on first use.

    The SDK reads the config on every request and never writes to it, so one
    instance is shared by every client rather than rebuilt per client.

    The returned dict is shared: treat it as read-only. Callers that need to
    mutate should use make_config, which always returns a fresh copy.
    """
    global _shared_config
    if _shared_config is None:
        _shared_config = make_config()
    return _shared_config


def make_config():
    """Build a fresh, fully materialised config dict.

    Every call rebuilds the whole structure, so prefer shared_config unless
    you need a private copy you intend to mutate.
    """
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
            "name": "amiiboSeries",
            "type": "`$STRING`",
          },
          {
            "name": "character",
            "type": "`$STRING`",
          },
          {
            "name": "gameSeries",
            "type": "`$STRING`",
          },
          {
            "name": "head",
            "type": "`$STRING`",
          },
          {
            "name": "image",
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
          {
            "name": "release",
            "type": "`$OBJECT`",
          },
          {
            "name": "tail",
            "type": "`$STRING`",
          },
          {
            "name": "type",
            "type": "`$STRING`",
          },
        ],
        "name": "amiibo",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {
                  "query": [
                    {
                      "kind": "query",
                      "name": "amiibo_series",
                      "orig": "amiibo_series",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "character",
                      "orig": "character",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "game_series",
                      "orig": "game_series",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "head",
                      "orig": "head",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "name",
                      "orig": "name",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "showusage",
                      "orig": "showusage",
                      "type": "`$BOOLEAN`",
                    },
                    {
                      "kind": "query",
                      "name": "tail",
                      "orig": "tail",
                      "type": "`$STRING`",
                    },
                    {
                      "kind": "query",
                      "name": "type",
                      "orig": "type",
                      "type": "`$STRING`",
                    },
                  ],
                },
                "kind": "http",
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
                  "res": "`body.amiibo`",
                },
              },
            ],
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
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
        ],
        "name": "amiiboseries",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/amiiboseries",
                "parts": [
                  "amiiboseries",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.amiibo`",
                },
              },
            ],
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
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
        ],
        "name": "character",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/character",
                "parts": [
                  "character",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.amiibo`",
                },
              },
            ],
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
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
        ],
        "name": "gameseries",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/gameseries",
                "parts": [
                  "gameseries",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.amiibo`",
                },
              },
            ],
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
            "type": "`$STRING`",
          },
          {
            "name": "name",
            "type": "`$STRING`",
          },
        ],
        "name": "type",
        "op": {
          "list": {
            "input": "data",
            "name": "list",
            "points": [
              {
                "args": {},
                "kind": "http",
                "method": "GET",
                "orig": "/type",
                "parts": [
                  "type",
                ],
                "select": {},
                "transform": {
                  "req": "`reqdata`",
                  "res": "`body.amiibo`",
                },
              },
            ],
          },
        },
        "relations": {
          "ancestors": [],
        },
      },
    },
    }
